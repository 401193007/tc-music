import storage from 'good-storage'

const SEARCH_KEY = '__search__'   //localStorage的key
const SEARCH_MAX_LEN = 15    //localStorage最大保存数

const FAVORITE_KEY = '__favorite__'
const FAVORITE_MAX_LEN = 200

const PLAY_KEY = '__play__'
const PLAY_MAX_LEN = 200

/**
 * @arr 缓存数组
 * @val 当前要添加进缓存的值
 * @compare findIndex的所需函数,找出值等于当前搜索值的缓存值
 */
function insertArray(arr, val, compare, maxLen) {
	const index = arr.findIndex(compare)
	if (index === 0) {
		return
	}
	if (index > 0) {
		arr.splice(index, 1)
	}
	arr.unshift(val)  //unshift() 方法可向数组的开头添加一个或更多元素，并返回新的长度
	if (maxLen && arr.length > maxLen) {
		arr.pop()   //pop() 方法用于删除并返回数组的最后一个元素
	}
}


function deleteFromArray(arr, compare) {
	const index = arr.findIndex(compare)
	if (index > -1) {
		arr.splice(index, 1)
	}
}

//保存
export function saveSearch(query) {
	let searches = storage.get(SEARCH_KEY, [])

	insertArray(searches, query, (item) => {
		return item === query
	}, SEARCH_MAX_LEN)

	storage.set(SEARCH_KEY, searches)
	return searches
}

//加载
export function loadSearch(){
	return storage.get(SEARCH_KEY, [])
}

export function deleteSearch(query) {
	let searches = storage.get(SEARCH_KEY, [])  //获取本地缓存搜索key
	deleteFromArray(searches, (item) => {
		return item === query
	})
	storage.set(SEARCH_KEY, searches)
	return searches
}

export function clearSearch() {
	storage.remove(SEARCH_KEY)   //删除本地缓存
	return []
}



export function saveFavorite(song) {
	let songs = storage.get(FAVORITE_KEY, [])
	insertArray(songs, song, (item) => {
		return song.id === item.id
	}, FAVORITE_MAX_LEN)
	storage.set(FAVORITE_KEY, songs)
	return songs
}

export function deleteFavorite(song) {
	let songs = storage.get(FAVORITE_KEY, [])
	deleteFromArray(songs, (item) => {
		return item.id === song.id
	})
	storage.set(FAVORITE_KEY, songs)
	return songs
}

export function loadFavorite() {
	return storage.get(FAVORITE_KEY, [])
}




export function savePlay(song) {
  let songs = storage.get(PLAY_KEY, [])
  insertArray(songs, song, (item) => {
    return song.id === item.id
  }, PLAY_MAX_LEN)
  storage.set(PLAY_KEY, songs)
  return songs
}

export function loadPlay() {
  return storage.get(PLAY_KEY, [])
}