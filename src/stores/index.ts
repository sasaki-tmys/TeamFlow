import { defineStore } from 'pinia'

export const useMainStore = defineStore('main', {
  state: () => ({
    user: null,
    projects: []
  }),
  actions: {
    login(user: any) {
      this.user = user
    },
    async fetchProjects() {
      // API call to fetch projects
      this.projects = [] // Dummy data
    }
  }
})
