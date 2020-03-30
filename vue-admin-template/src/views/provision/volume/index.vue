<template>
  <div class="app-container">
    
  </div>
</template>

<script>
import { getList } from '@/api/table'
import { getVolumeList } from '@/api/provision/volume.js'

export default {
  filters: {
    statusFilter(status) {
      const statusMap = {
        published: 'success',
        draft: 'gray',
        deleted: 'danger'
      }
      return statusMap[status]
    }
  },
  data() {
    return {
      list: null,
      listLoading: true
    }
  },
  created() {
    this.fetchData();
    this.volumeList();
  },
  methods: {
    fetchData() {
      this.listLoading = true
      getList().then(response => {
        this.list = response.data.items
        this.listLoading = false
      })
    },
    volumeList() {
      getVolumeList().then();
    }
  }
}
</script>
