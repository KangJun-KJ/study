import San from 'san'
import {router,Link} from 'san-router'


import App from '@/App'
import task2_1 from '@/components/task2_1'
import task2_2 from '@/components/task2_2'
import task2_3 from '@/components/task2_3'
import task2_4 from '@/components/task2_4'
import task2_5 from '@/components/task2_5'

router.add({rule: '/', Component: App, target: '#app'})
router.add({rule: '/task2_1', Component: task2_1, target: '#app'})
router.add({rule: '/task2_2', Component: task2_2, target: '#app'})
router.add({rule: '/task2_3', Component: task2_3, target: '#app'})
router.add({rule: '/task2_4', Component: task2_4, target: '#app'})
router.add({rule: '/task2_5', Component: task2_5, target: '#app'})

router.start();