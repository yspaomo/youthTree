import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import index from '@/components/index/index.vue'
import aboutUs from '@/components/aboutUs/aboutUs.vue'
import product from '@/components/product/product.vue'
import service from '@/components/service/service.vue'
import classic_case from '@/components/case/case.vue'
import news from '@/components/news/news.vue'
import news_detail from '@/components/news/news_detail.vue'
import query_detail from '@/components/news/query_detail.vue'
import join from '@/components/join/join.vue'
import contactUs from '@/components/contactUs/contactUs.vue'
import query from '@/components/news/query.vue'

export default new Router({
	routes: [{
			path: '/product',
			name: 'product',
			component: product
//			component: function(resolve) {
//				require(['@/components/product/product.vue'], resolve)
//			}
		},
		{
			path: '/',
			name: 'index',
			component: index
//			component: function(resolve) {
//				require(['@/components/index/index.vue'], resolve)
//			}
		},
		{
			path: '/index',
			name: 'index',
			component: index
//			component: function(resolve) {
//				require(['@/components/index/index.vue'], resolve)
//			}
		},
		{
			path: '/aboutUs',
			name: 'aboutUs',
			component: aboutUs
//			component: function(resolve) {
//				require(['@/components/aboutUs/aboutUs.vue'], resolve)
//			}
		},
		{
			path: '/service',
			name: 'service',
			component: service
//			component: function(resolve) {
//				require(['@/components/service/service.vue'], resolve)
//			}
		},
		{
			path: '/case',
			name: 'case',
			component: classic_case
//			component: function(resolve) {
//				require(['@/components/case/case.vue'], resolve)
//			}
		},
		{
			path: '/news',
			name: 'news',
			component: news
//			component: function(resolve) {
//				require(['@/components/news/news.vue'], resolve)
//			}
		},
		{
			path: '/news_detail',
			name: 'news_detail',
			component: news_detail
//			component: function(resolve) {
//				require(['@/components/news/news_detail.vue'], resolve)
//			}
		},
		{
			path: '/join',
			name: 'join',
			component: join
//			component: function(resolve) {
//				require(['@/components/join/join.vue'], resolve)
//			}
		},
		{
			path: '/contactUs',
			name: 'contactUs',
			component: contactUs
//			component: function(resolve) {
//				require(['@/components/contactUs/contactUs.vue'], resolve)
//			}
		},
		{
			path: '/query',
			name: 'query',
			component: query
//			component: function(resolve) {
//				require(['@/components/news/query.vue'], resolve)
//			}
		},
		{
			path: '/query_detail',
			name: 'query_detail',
			component: query_detail
//			component: function(resolve) {
//				require(['@/components/news/query_detail.vue'], resolve)
//			}
		}
	]
})