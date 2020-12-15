<template>
    <div class="relative sm:py-0 py-3 text-sm text-gray-700">
      <vue-autosuggest
        v-model="query"
        :suggestions="filteredOptions"
        :input-props="{
          id:'autosuggest__input', 
          placeholder:'Search breed name (ex: Abyssinian, Bengal, ...)', 
          class: 'focus:ring-indigo-500 focus:border-indigo-500 border border-gray-400 px-2 py-2 w-full rounded-md block'
          }"
        @focus="focusMe"
        @selected="onSelected"
      >  
        <div slot-scope="{suggestion}">
          <div>{{suggestion.item}}</div>
        </div>
      </vue-autosuggest>
    </div>
</template>


<script>
var breeds;
import { VueAutosuggest } from 'vue-autosuggest'
export default {
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
      if (this.query != "" && breeds.length > 0) {
        // console.log(breeds);
        data = breeds.filter(option => {
          return option.toLowerCase().indexOf(this.query.toLowerCase()) > -1;
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
      breeds = sessionStorage.getItem('cat_breeds');
      if (breeds == null) {
        // load from the breeds list
        this.$axios.get('breeds')
        .then(({data}) => {
          breeds = data.map(data=>data.name);
          sessionStorage.setItem('cat_breeds', JSON.stringify(breeds));
        });
      } else {
        breeds = JSON.parse(breeds);
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
          query: {name: encodeURI(item.item)}
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
  @apply absolute z-10 bg-white w-full rounded-md shadow;
}
.autosuggest__results-item {
  @apply px-2 py-1 cursor-pointer;
}
.autosuggest__results-item:hover {
  @apply bg-gray-200 pl-3;
}
</style>