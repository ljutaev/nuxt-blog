const posts = [
    {title: 'Post 1', date: new Date(), views: 22, comments: [1,2], _id: 'id2'},
    {title: 'Post 2', date: new Date(), views: 22, comments: [1,2], _id: 'id1'},
]
export const actions = {
    async fetchAdmin({commit}) {
        try {
            return await this.$axios.$get('/api/post/admin')
        } catch (e) {
            commit('setError', e, {root: true})
            throw e
        }
    },
    async fetch({commit}) {
        try {
            return await this.$axios.$get('/api/post/')
        } catch (e) {
            commit('setError', e, {root: true})
            throw e
        }
    },
    async remove({commit}, id) {
        try {
            return await this.$axios.$delete(`/api/post/admin/${id}`)
        } catch (e) {
            commit('setError', e, {root: true})
            throw e
        }
    },
    async update({commit}, {id, text}) {
        try {
            return await this.$axios.$put(`/api/post/admin/${id}`, {text})
        } catch (e) {
            commit('setError', e, {root: true})
            throw e
        }
    },
    async create({commit}, {title, text, image}) {
        console.log('create vuex')

        try {

            const fd = new FormData()

            fd.append('title', title)
            fd.append('text', text)
            fd.append('image', image, image.name)

            return await this.$axios.$post('/api/post/admin', fd)

        } catch (e) {
            commit('setError', e, {root: true})
            throw e
        }

    },
    async fetchAdminById({}, id) {
        try {
            return await this.$axios.$get(`/api/post/admin/${id}`)
        } catch (e) {
            commit('setError', e, {root: true})
            throw e
        }
    },
    async fetchById({}, id) {
        try {
            return await this.$axios.$get(`/api/post/${id}`)
        } catch (e) {
            commit('setError', e, {root: true})
            throw e
        }
    },
    async addView({commit}, {views, _id}) {
        try {
            return await this.$axios.$put(`/api/post/add/view/${_id}`, {views})
        } catch (e) {
            commit('setError', e, {root: true})
            throw e
        }
    }
}