<template>
    <div class="relative sm:py-0 py-3 text-sm text-gray-700">
      <vue-autosuggest
        v-if="$store.state.breed.list.length > 0"
        v-model="query"
        :suggestions="filteredOptions"
        :input-props="{
          id:'autosuggest__input', 
          placeholder:'Search breed name (ex: Abyssinian, Bengal, ...)', 
          class: 'focus:ring-indigo-500 focus:border-indigo-500 border border-gray-400 px-2 py-2 w-full rounded-md block'
          }"
        @selected="onSelected"
        :get-suggestion-value="getSuggestionValue"
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
  components: {
    VueAutosuggest
  },
  data() {
    return {
      query: "",
      skills: ['indoor', 'lap', 'adaptability', 'affection_level', 'child_friendly', 'cat_friendly', 'dog_friendly', 'energy_level', 'grooming', 'health_issues', 'intelligence', 'shedding_level', 'social_needs', 'stranger_friendly', 'vocalisation', 'bidability', 'experimental', 'hairless', 'rare', 'hypoallergenic']
    }
  },
  computed: {
    filteredOptions() {
      let data = [];
      if (this.query != "") {
        data = this.$store.state.breed.list.filter(option => {
          return option.name.toLowerCase().indexOf(this.query.toLowerCase()) > -1;
        });
        data = data.slice(0, 5);
      }
      // console.log("filtered list: ", data);
      return [{data: data}];
    }
  },
  methods: {
    onSelected(item) {
        console.log("selected: ", item);
        this.$router.push({ 
          name: 'breed',
          query: {name: encodeURI(item.item.name)}
        });
    },
    getSuggestionValue(suggestion) {
      return suggestion.item.name;
    }
  },
  async mounted() {
    // console.log("search bar mounted");
    // let data = await this.$axios.$get('breeds');
    // this.$store.commit('breed/load', data);

    // this.$nextTick(()=> {
    //     lazyload();
    // });
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