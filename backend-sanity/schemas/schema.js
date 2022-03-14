// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'
import works from './work'
import testimonials from './testimonials'
import brands from './brands'
import abouts from './about'
import experiences from './experience'
import skills from './skills'
import workExperience from './workExperience'
import contact from './contact'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    works, testimonials, brands, abouts, skills, workExperience, experiences, contact
  ]),
})
