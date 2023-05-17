import {Home, HomeOutlined, Explore, ExploreOutlined,Subscriptions, SubscriptionsOutlined} from '@mui/icons-material';

export {default as Layout} from'../Pages/Layout'
export {default as Home} from'../Pages/Home'
export {default as Video} from'../Pages/Video'
export {default as Channel} from'../Pages/Channel'
export {default as AfterSearch} from'../Pages/AfterSearch'

export const sidebar =[
    {
        txt: 'Home',
        icon: <Home/>,
        selectedIcon:  <HomeOutlined/>
    },
    {
        txt: 'Explore',
        icon: <ExploreOutlined/>,
        selectedIcon: <ExploreOut/>
    },
    {
        txt: 'Subscriptions',
        icon: <Subscriptions/>,
        selectedIcon: <SubscriptionsOutlined/>
    },
]