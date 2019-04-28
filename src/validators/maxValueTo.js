import { ref, withParams } from './common'

export default (prop) =>
  withParams(
    { type: 'maxValueTo', prop },
    function( value, parentVm ) {
        return !req(value) ||  
          ((!/\s/.test(value) || value instanceof Date) && +value <= +ref(prop, this, parentVm))
    })
