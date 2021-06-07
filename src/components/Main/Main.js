import Article from './article'
import EmailToolbar from './EmailToolbar'

function Main() {
  return(
    <main className="email-view">
        <EmailToolbar />
        <Article />     
      </main>
  )
}

export default Main