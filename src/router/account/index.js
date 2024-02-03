import LoginView from '@/views/login/LoginView.vue'
import JoinView from '@/views/login/JoinView.vue'
import MyPageView from '@/views/account/MyPageView.vue'
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
    },
    {
        path:'/account/mypage',
        name:'mypage',
        component: MyPageView
    }
]
export default accountRouter