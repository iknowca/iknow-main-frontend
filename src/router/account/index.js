import LoginView from '@/views/login/LoginView.vue'
import JoinView from '@/views/login/JoinView.vue'
import MyPageView from '@/views/account/MyPageView.vue'
import KakaoCallback from '@/views/login/oauth/callback/kakaoLoginView.vue'
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
    },
    {
        path:'/oauth/callback/kakao',
        name:'kakao-callback',
        component: KakaoCallback,
    }
]
export default accountRouter