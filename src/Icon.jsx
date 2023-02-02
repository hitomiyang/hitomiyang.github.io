import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from '@fortawesome/fontawesome-svg-core'

import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

import { findIconDefinition } from '@fortawesome/fontawesome-svg-core'

const bars = findIconDefinition({ prefix: 'fas', iconName: 'glasses' })


library.add(fas, far, fab)

function Icon() {
  return (
    <div>Icon</div>
  )
}

export default Icon