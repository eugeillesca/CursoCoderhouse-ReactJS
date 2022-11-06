let ok = true

export const customFetch = (time, task) => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            ok ? resolve(task) : reject ('Ha ocurrido un error.')
        }, time)
    })

}