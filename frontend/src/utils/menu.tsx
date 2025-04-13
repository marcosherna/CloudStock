import type { MenuProps } from 'antd';  
import { AppstoreOutlined } from "@ant-design/icons"

type MenuItem = Required<MenuProps>['items'][number];

const items:MenuItem[] = [
    { 
        key: '',
        label: 'Dashboard',
        icon: <AppstoreOutlined />,
    },
    { 
        key: '2',
        label: 'Applications',
        type: 'group', 
        children: [
            { 
                key: '2-1', 
                label: "Administration", 
                icon: <AppstoreOutlined />, 
                children:[
                    { 
                        key: '2-1-1', 
                        label: 'Catalogs', 
                        icon: <AppstoreOutlined />,
                        children:[
                            { 
                                key: 'administration/catalogs/categories', 
                                label: 'Categories', 
                                icon: <AppstoreOutlined />,
                            },
                            { 
                                key: '2-1-1-2', 
                                label: 'Products', 
                                icon: <AppstoreOutlined />,
                            },
                        ]
                    },
                    { 
                        key: '2-1-2', 
                        label: 'Roles', 
                        icon: <AppstoreOutlined />,
                    },
                ]
            }, 
        ] 
    },
    {
        key: '3',
        label: 'Settings',
        icon: <AppstoreOutlined />,
    },
    // {
    //     key: '3',
    //     label: 'Profile',
    //     icon: <img src="/assets/icons/profile.svg" alt="profile" />,
    // }
]

export { items }