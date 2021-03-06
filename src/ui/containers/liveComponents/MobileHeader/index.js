import _ from 'lodash'
import React, { PureComponent } from 'react'
import { Header } from 'react-navigation'

import { routes } from '../../../nav'
import { connectStore } from '../../../helpers/redux'
import Image from '../../../components/Image'
import styles from './styles'

@connectStore('nav')
export default class MobileHeader extends PureComponent {
  render () {
    const { getCurrentRoute } = this.props.selectors

    const { routeName } = getCurrentRoute()

    this.props.scene.descriptor.options = Object.assign(
      this.props.scene.descriptor.options, {
        headerLeft: this._renderMenuButton(),
        headerRight: this._renderHeaderRight(this.props.scene.descriptor),
        headerTitle: _.get(routes, `${routeName}.screen.navigationOptions.title`, '')
      }
    )

    return <Header {...this.props} />
  }

  _renderMenuButton () {
    return (
      <Image id='logo' style={styles.menuButtonImage} onPress={this._onToggleMenu} resizeMode='contain' />
    )
  }

  _renderHeaderRight ({ state } = {}) {
    const { routeName } = state.routes[state.index]

    if (routeName) {
      const HeaderRightComponent = _.get(routes, `${routeName}.screen.navigationOptions.headerRightComponent`)

      if (HeaderRightComponent) {
        return <HeaderRightComponent />
      }
    }

    return null
  }

  _onToggleMenu = () => {
    const { navToggleDrawer } = this.props.actions

    navToggleDrawer()
  }
}
