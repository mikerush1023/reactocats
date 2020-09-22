import React, { Component } from 'react'
import { PageFooter } from './components/PageFooter'
import { PageHeader } from './components/PageHeader'
import { Octocat } from './components/Octocat'

class App extends Component {
  render() {
    return (
      <div>
        <PageHeader />

        <main>
          <Octocat
            name="Terracottocat"
            link="https://octodex.github.com//terracottocat/"
            image="https://octodex.github.com//images/Terracottocat_Single.png"
            number="149"
            authorLink="https://github.com/chubbmo"
            authorImage="https://github.com/chubbmo.png"
            authorName="chubbmo"
          />

          <Octocat
            name="Octogatos"
            link="https://octodex.github.com//octogatos/"
            image="https://octodex.github.com//images/Octogatos.png"
            number="148"
            authorLink="https://github.com/cameronfoxly"
            authorImage="https://github.com/cameronfoxly.png"
            authorName="cameronfoxly"
          />

          <Octocat
            name="Sentrytocat"
            link="https://octodex.github.com//sentrytocat/"
            image="https://octodex.github.com//images/Sentrytocat_octodex.jpg"
            number="143"
            authorLink="https://github.com/cameronmcefee"
            authorImage="https://github.com/cameronmcefee.png"
            authorName="cameronfoxly"
          />

          <Octocat
            name="Boxertocat"
            link="https://octodex.github.com//boxertocat/"
            image="https://octodex.github.com//images/boxertocat_octodex.jpg"
            number="141"
            authorLink="https://github.com/rubyjazzy"
            authorImage="https://github.com/rubyjazzy.png"
            authorName="rubyjazzy"
          />

          <Octocat
            name="Surftocat"
            link="https://octodex.github.com//suftocat/"
            image="https://octodex.github.com//images/surftocat.png"
            number="140"
            authorLink="https://github.com/jeejkang"
            authorImage="https://github.com/jeejkang.png"
            authorName="jeejkang"
          />

          <Octocat
            name="Scubatocat"
            link="https://octodex.github.com//scubatocat/"
            image="https://octodex.github.com//images/scubatocat.png"
            number="138"
            authorLink="https://github.com/cameronfoxly"
            authorImage="https://github.com/cameronfoxly.png"
            authorName="cameronfoxly"
          />

          <Octocat
            name="Dinotocat"
            link="https://octodex.github.com//dinotocat/"
            image="https://octodex.github.com//images/dinotocat.png"
            number="130"
            authorLink="https://github.com/kimestoesta"
            authorImage="https://github.com/kimestoesta.png"
            authorName="kimestoesta"
          />

          <Octocat
            name="Spidertocat"
            link="https://octodex.github.com//spidertocat/"
            image="https://octodex.github.com//images/spidertocat.png"
            number="88"
            authorLink="https://github.com/jeejkang"
            authorImage="https://github.com/jeejkang.png"
            authorName="jeejkang"
          />
        </main>
        <PageFooter />
      </div>
    )
  }
}
export default App
