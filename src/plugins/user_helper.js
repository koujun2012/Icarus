import store from '../store/index.js'

let user = store.state.user
let getters = store.getters

class UserHelperGetters {
    get data () { return user.userData }
    get unread () { return user.unread }

    get isNewUser () { return getters['user/isNewUser'] }

    get roles () { return getters['user/roles'] }
    get basicRole () { return getters['user/basicRole'] }
    get mainRole () { return getters['user/mainRole'] }
    get forumAdminRole () { return getters['user/forumAdminRole'] }
    get wikiEditRole () { return getters['user/wikiEditRole'] }

    get isWikiAdmin () { return getters['user/isWikiAdmin'] }
    get isSiteAdmin () { return getters['user/isSiteAdmin'] }
    get isForumAdmin () { return getters['user/isForumAdmin'] }
}

let uhg = new UserHelperGetters()

export default {
    install (Vue, options) {
        Object.defineProperty(Vue.prototype, '$user', {
            get () {
                return uhg
            }
        })
    }
}
