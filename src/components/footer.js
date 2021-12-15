import React from 'react'

class Footer extends React.Component {
    constructor (props) {
        super(props)
    }

    render () {
        return (
            <section className="col-md-12 card-wrapper">
                <div className="footer">模板由小王同志抖音财富等级号网络传媒工作室设计开发，最后更新于<span className="date">2020-12-15</span></div>
            </section>
        )
    }
}
export default Footer
