import React from 'react'

const TitleContext = React.createContext({
    changeTitle: (newTitle) => {}
})

export default TitleContext