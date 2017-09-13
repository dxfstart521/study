Proxy 代理
Reflect


let obj={
	time: '2017-09-13',
	name: 'net,
	_r: 123
}

let monitor=new Proxy(obj, {
	get(target,keys){
		return target[key].replace('2017','2018')
	},
	set(target,key,value){
		if(key ==='name'){
			return target[key]=value;
		}else{
			return target[key];
		}
	},
	//拦截key in object
	has(target,key){
		if(key === 'name'){
			return target[key];
		}else{
			return false;
		}
	},
	//拦截delete
	deleteProperty(target,key){
		if(key.indexOf('_') >=-1){
			delete target[key];
			return true;
		}else{
			return target[key];
		}
	},
	//拦截Object.keys.getOwnPropertySymole
	ownKeys(target){
	
	}
	
})

console.log('get', moniter.time);

moniter.time ='2018'
moniter.name='mokewang'
console.log('set',moniter.time.moniter);


console.log('Reflect get',Reflect.get(obj,'time'))

Reflect.set(obj,'name','mukewang');



//提供代理
function validator(target,validator){
	return new Proxy(target, {
		_validator: validator,
		set(target,key,value,proxy){
			
		}
	})
}


proxy和reflect 可以做数据校验