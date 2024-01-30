import LoginView from '@/views/login/LoginView.vue'
import JoinView from '@/views/login/JoinView.vue'
const accountRouter = [
    {
        path: '/login',
        name: 'login',
        component: LoginView
    },
    {
        path:'/join',
        name:'join',
        component: JoinView
    }
]
export default accountRouter