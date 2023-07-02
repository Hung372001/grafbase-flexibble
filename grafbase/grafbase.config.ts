import { g, auth, config } from '@grafbase/sdk'
const User = g.model('User',{
  name:g.string().length({min:2, max:20}),
  email:g.email().unique(),
  avatarUrl:g.url(),
  description:g.string(),
  githubUrl:g.url().optional(),
  linkedInUrl:g.url().optional(),
  project:g.relation(()=> Project).list().optional(),
})
const Project = g.model('Project',{
  title:g.string().length({min:3}),
  description:g.string(),
  image:g.url(),
  liveSiteUrl:g.url(),
  githubUrl:g.url().optional(),
  category:g.string().search(),
  createdBy:g.relation(()=>User)
})
export default config({
  schema: g
  // Integrate Auth
  // https://grafbase.com/docs/auth
  // auth: {
  //   providers: [authProvider],
  //   rules: (rules) => {
  //     rules.private()
  //   }
  // }
})
