import React from 'react'
import styles from './defaultLayoutStyle.module.scss'
import classNames from 'classnames/bind'


const cx = classNames.bind(styles)

const userLayout = ({children: any}) => {
  
  return (
    <React.Fragment>
      <div className={cx('warrper')}>
        
      </div>
      </React.Fragment>
  )
}

export default userLayout