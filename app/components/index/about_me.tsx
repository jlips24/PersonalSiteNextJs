export default function AboutMe() {
    // TODO: change from HTML to load from JSON
	return (
        <>
            <div className="aboutTermInnerTop"></div>
            <div className="aboutTermOuter" id="aboutTermOuter">
	  		<div className="aboutTermInner" id="aboutTermInner">
	  			<div className="aboutText">
					<p className="prompt">&gt; Jake.origin</p>
					<p className="response">=&gt; Tappan, NY</p>

					<p className="prompt">&gt; Jake.residence</p>
					<p className="response">=&gt; New York, NY</p>

					<p className="prompt">&gt; Jake.education</p>
					<p className="response">=&gt; Boston University</p>

					<p className="prompt">&gt; Jake.major</p>
					<p className="response">=&gt; Computer Science</p>

					<p className="prompt">&gt; Jake.interests</p>
					<p className="response">=&gt; [code, cars, technology, photoshop, drones, video editing, music, video games]</p>

					<p className="prompt">&gt; Jake.links</p>
					<p className="response">=&gt; <a href="/resume" target="_blank">resume.pdf</a></p>
					<p className="response">=&gt; <a href="mailto:jlips@bu.edu">jlips@bu.edu</a></p>
					<p className="response">=&gt; <a href="https://www.linkedin.com/in/jakelipson/" target="_blank">LinkedIn</a></p>
					<p className="response">=&gt; <a href="https://github.com/jlips24" target="_blank">GitHub</a></p>
	  			</div>
			</div>
		</div>
        </>
    )
}