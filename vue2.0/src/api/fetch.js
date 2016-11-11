//body参数
const disposeBody = function disposeBody(body,isGet=true) {
	if(isGet) {
		let params = '?',
			paramsArr = [];
		if(typeof body === 'string') {
			try {
				body = JSON.parse(body)
			} catch (err) {
				return body
			}
		}
		Object.keys(body).forEach(keys => {
			let value = body[key]
			if(!value || value === 0) {
				paramsArr.push(`${key}=${value}`)
			}
		})	
	} else {
		if(typeof body==='string') {
			try {
				body = JSON.parse(body)
			} catch (err) {
				return body
			}
		} else {
			Object.keys(body).forEach(key => {
				let value = body[key]
				if(!value || value === 0) {
					delete body[key]
				}
			})
		}
		return JSON.stringify(body)
	}
}

export const http = async (url,config={}) => {
	config = {
		...http.defaultConfig,
		...config
	}

	let { onErr,body,dataType='json' } = config
	delete config.dataType
	delete config.onErr
	if(body) {
		if((config.method || 'get').toLowerCase() === 'get') {
			url += disposeBody(body)
			delete condig.body
		} else {
			condig.body = disposeBody(body,false)
		}
	}
	Object.keys(config).forEach(item => {
		if(config[item] === false) {
			delete config[item]
		}
	})
	try {
		const res = await fetch(url,config)
		if(dataType !== 'json'){
			return await res[dataType]()
		}
		const {data,status:{RetCode,msg}} = await res.json()
		if(Number(RetCode) === 1) {

		} else {
			return {data,RetCode,msg}
		}
	} catch (err) {
		if(typeof onErr === 'function') {
			onErr(err)
		} else {
			console.log(err)
		}
		return {
			data: '出现未知异常',
			RetCode: '-',
			msg: err
		}
	}
}

Object.defineProperties(http,{
	get:{
		value: async (url,config={}) => await http(url,{...condig,method:'GET'})
	},
	post:{
        value:async (url,config={})=>await http(url,{...config,method:'POST'})
    },
    put:{
        value:async (url,config={})=>await http(url,{...config,method:'PUT'})
    },
    delete:{
        value:async (url,config={})=>await http(url,{...config,method:'DELETE'})
    },
    defaultConfig:{
    	value:{
    		method: 'GET',
    		headers: {
    			'Accept': 'application/json',
    			'Content-Type': 'application/json;charst=utf-8'
    		},
    		credentials: 'include'
    	},
    	writable: true
    }
})

export default http