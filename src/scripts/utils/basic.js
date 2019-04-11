/**
 * 防抖函数
 * @param {Function} fn 实际要执行的函数
 * @param {Number} delay 延迟时间，单位是毫秒（ms）
 * @return {Function} 返回一个加了防抖特技的函数
 */
export const debounce = (fn, delay = 300, immediate = false) => {
    let timer = null
    if (typeof fn !== 'function') throw new Error('fn must be a function')

    // 立即执行
    immediate && fn()

    return function (...args) {
        window.clearTimeout(timer)
        timer = window.setTimeout(
            fn.bind(this, args),
            delay,
        )
    }
}

/**
 * 探测当前系统类型
 *
 * @returns {Object} obj
 * @returns {String} obj.os 操作系统名称
 * @returns {Boolean} obj.ios
 * @returns {Boolean} obj.ipad
 * @returns {Boolean} obj.iphone
 * @returns {Boolean} obj.android
 */
export const detectOS = () => {
    /* eslint-disable no-useless-escape */
    const ua = navigator.userAgent
    const android = /(Android);?[\s\/]+([\d.]+)?/.test(ua)
    const ipad = /(iPad).*OS\s([\d_]+)/.test(ua)
    const iphone = !ipad && /(iPhone\sOS)\s([\d_]+)/.test(ua)
    const ios = iphone || ipad

    return {
        os: android ? 'android' : 'ios',
        ios,
        ipad,
        iphone,
        android,
    }
}
