export default function({ $axios, redirect, store }) {

    $axios.interceptors.request.use(request => {
        if( store.getters['auth/isAuthenticated'] && !request.headers.common['Authorization'] ) {
            const token = store.getters['auth/token']
            request.headers.common['Authorization'] = `Bearer ${token}`
        }
        
        return request
    })

    $axios.onError( error => {
        if (error.responce) {
            if (error.responce.status === 401) {
                redirect('/admin/login?message=session')
                store.dispatch('auth/logout')
            }

            if(error.responce.status === 500) {
                console.error('Server 500 error')
            }
        }
    })
}