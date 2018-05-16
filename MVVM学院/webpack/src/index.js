import San from 'san'
import {router,Link} from 'san-router'

import App from '@/App'
import task2_1 from '@/components/task2_1'
import task2_2 from '@/components/task2_2'
import task2_3 from '@/components/task2_3'
import task2_4 from '@/components/task2_4'
import task2_5 from '@/components/task2_5'
import task2_6 from '@/components/task2_6'
import task2_7_1 from '@/components/task2_7_1'
import task2_7_2 from '@/components/task2_7_2'
import task2_7_2_demo from '@/components/task2_7_2_demo'
import task2_8 from '@/components/task2_8'
import task3_1 from "@/components/task3_1"
import task3_2 from '@/components/task3_2'
import task4_1 from '@/components/task4_1'


router.add({rule: '/', Component: App, target: '#app'})
router.add({rule: '/task2_1', Component: task2_1, target: '#app'})
router.add({rule: '/task2_2', Component: task2_2, target: '#app'})
router.add({rule: '/task2_3', Component: task2_3, target: '#app'})
router.add({rule: '/task2_4', Component: task2_4, target: '#app'})
router.add({rule: '/task2_5', Component: task2_5, target: '#app'})
router.add({rule: '/task2_6', Component: task2_6, target: '#app'})
router.add({rule: '/task2_7_1', Component: task2_7_1, target: '#app'})
router.add({rule: '/task2_7_2', Component: task2_7_2, target: '#app'})
router.add({rule: '/task2_7_2_demo', Component: task2_7_2_demo, target: '#app'})
router.add({rule: '/task2_8', Component: task2_8, target: '#app'})
router.add({rule: '/task3_1', Component: task3_1, target: '#app'})
router.add({rule: '/task3_2', Component: task3_2, target: '#app'})
router.add({rule: '/task4_1', Component: task4_1, target: '#app'})


router.start();