<template>
  <div>
		Provide:{{ praData.text }}
		<hr/>
		<ChildDemo/>
	</div>
</template>
<script>
import ChildDemo from './Child'
import { setTimeout } from 'timers';
export default {
	name:'ProvideDemo',
	provide(){
		return { praProvide:this.praData }
	},
	data(){
		return {
			praData: {
				text:'parent word'
			}
		}   
	},
	mounted(){
		// setTimeout(()=>{
		// 	this.praData.text = 'parData Changed';
		// 	// this._provided.praText = "new words"; 
		// 	// console.log( this._provided)
		// },1000)
	},
	components:{
		ChildDemo
	}
}
</script>