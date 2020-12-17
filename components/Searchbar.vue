<template>
    <div class="relative sm:py-0 py-2 text-sm text-gray-700">
      <vue-autosuggest
        v-model="query"
        :suggestions="filteredOptions"
        :input-props="{
          id:'autosuggest__input', 
          placeholder:'Search breed name (ex: Abyssinian, Bengal, ...)', 
          class: (frontpage ? 'focus:border-white border-white placeholder-white text-white' : 'focus:border-indigo-500 focus:shadow-logo-indigo border-gray-400 placeholder-gray-600') + ' bg-transparent transition-color ease-in-out duration-300 border px-2 sm:py-2 py-1 w-full rounded-md block'
          }"
        @focus="focusMe"
        @selected="onSelected"
      >  
        <div slot-scope="{suggestion}">
          <div>{{suggestion.item.name}}</div>
        </div>
      </vue-autosuggest>
    </div>
</template>


<script>
import { VueAutosuggest } from 'vue-autosuggest'
export default {
  props: {
    frontpage: Boolean
  },
  components: {
    VueAutosuggest
  },
  data() {
    return {
      query: "",
      breeds: [],
      skills: ['indoor', 'lap', 'adaptability', 'affection_level', 'child_friendly', 'cat_friendly', 'dog_friendly', 'energy_level', 'grooming', 'health_issues', 'intelligence', 'shedding_level', 'social_needs', 'stranger_friendly', 'vocalisation', 'bidability', 'experimental', 'hairless', 'rare', 'hypoallergenic']
    }
  },
  computed: {
    filteredOptions() {
      let data = [];
      if (this.query != "" && this.breeds.length > 0) {
        // console.log(this.breeds);
        data = this.breeds.filter(option => {
          return option.name.toLowerCase().indexOf(this.query.toLowerCase()) > -1;
        });
        data = data.slice(0, 5);
      }
      // console.log("filtered list: ", data);
      return [{data: data}];
    }
  },
  methods: {
    focusMe() {
      // load the data (name, url, thumbnail?)
      this.breeds = sessionStorage.getItem('cat_breeds');
      if (this.breeds == null) {
        // load from the breeds list
        var t = this;
        this.$axios.get('breeds')
          .then(({data}) => {
            t.breeds = data.map(data=> { 
              return { 
                name: data.name, 
                temperament: data.temperament,
                image: data.hasOwnProperty('image') ? data.image.url : null
              };
            });
            sessionStorage.setItem('cat_breeds', JSON.stringify(t.breeds));
          });
      } else {
        this.breeds = JSON.parse(this.breeds);
      }
    },
    onSelected(item) {
      // console.log("selected: ", item);
      let current = {
        name: this.$router.currentRoute.name,
        query: this.$router.currentRoute.query
      };
      let selected = { 
        name: 'breed',
        query: {name: encodeURI(item.item.name)}
      };
      if (current != selected) {
        this.$router.push(selected);
        if (current.name == selected.name) {
          // send event
          this.$nuxt.$emit('refresh_breed_page', selected.query.name);
        }
      }
    }
  }
}
</script>

<style>
.autosuggest-container {
    @apply flex justify-center w-full;
}
#autosuggest { 
    @apply w-full block;
}
#autosuggest-autosuggest__results {
  @apply absolute z-10 bg-gray-100 w-full rounded-md shadow-2xl;
}
.autosuggest__results-item {
  @apply px-2 py-1 cursor-pointer;
}
.autosuggest__results-item > div {
  @apply transition-transform transform duration-300 ease-in-out;
}
.autosuggest__results-item:hover {
  @apply bg-gray-300 pl-3;
}
.autosuggest__results-item:hover > div {
  @apply translate-x-px;
}
</style>