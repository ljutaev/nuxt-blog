const posts = [
    {title: 'Post 1', date: new Date(), views: 22, comments: [1,2], _id: 'id2'},
    {title: 'Post 2', date: new Date(), views: 22, comments: [1,2], _id: 'id1'},
]
export const actions = {
    async fetchAdmin({}) {
        return await new Promise (resolve => {
            setTimeout(() => {
                resolve(posts)
            }, 1000)
        })
    },
    async remove({}, id) {
        console.log('delete vuex')
    },
    async update({}, {id, text}) {
        console.log('update vuex')
    },
    async create({commit}, {title, text, image}) {
        console.log('create vuex')

        try {

            const fd = new FormData()

            fd.append('title', title)
            fd.append('text', text)
            fd.append('image', image, image.name)

        } catch (e) {
            commit('setError', e, {root: true})
            throw e
        }

        return await new Promise (resolve => {
            setTimeout(() => {
                resolve()
            }, 1000)
        })
    },
    async fetchAdminById({}, id) {
        return await new Promise (resolve => {
            setTimeout(() => {
                resolve(posts.find(p => p._id === id))
            }, 1000)
        })
    }
}