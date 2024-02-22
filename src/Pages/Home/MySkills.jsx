import data from "../../data/index.json"


export default function MySkills() {
    return (
        <section className="skills--section" id="mySkills">
            <div className="portfolio--container">
                <h2 className="skills--section--heading">My Expertise</h2>
            </div>
            <div className="skills--section--container">
                {data?.skills?.map((skill, index) => {
                    return (
                        <div key={index} className="skills--section--card">
                            <div className="skills--section--card--icon">
                                <img src={skill.src} alt={skill.title} />
                            </div>
                            <div className="skills--section--card--title">
                                <h3>{skill.title}</h3>
                            </div>
                            <div className="skills--section--card--description">
                                <p>{skill.description}</p>
                            </div>
                        </div>
                    )
                })
                }
            </div>
        </section>
    )
}