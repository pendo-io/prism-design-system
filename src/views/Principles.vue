<template>
    <div class="home">
        <h1>Pendo Product Design Principles Toolkit</h1>
        <div class="body-content">
            <p>
                The purpose of these principles is to have a shared set of guidelines for expressing our vision of what makes our product great in terms of design and usability. 
            </p>
            <img src="images/principles-image.png" alt="Pendos design principles illustration">

            <h2> The Principles</h2>

            <div class="block">
                <img src="images/build-connections.png">
                <div>
                    <h3>Build connections before going deep</h3>
                    <p>We connect the dots across our product so customers don’t have to. Insights are given context. Workflows are seamless. Navigation is fluid. Then we add the depth our power users need. 
                    </p>
                </div>
            </div>


            <div class="block">
                <img src="images/leverage-familiarity.png">
                <div>
                    <h3>Leverage familiarity over novelty</h3>
                    <p>We use design and content to lower the barrier through familiarity. Intuitive interactions. Plain language. Recognizably Pendo. Then we go all in on bold, novel experiences when they count.</p>
                </div>
            </div>


            <div class="block">
                <img src="images/instill-confidence-transparency.png">
                <div>
                    <h3>Instill confidence through transparency</h3>
                    <p>We provide quality insights which businesses rely on. Sources are clear. Evidence is provided. Controls scale. Then we drive growth by providing insights customers connect with. </p>
                </div>
            </div>

            <div class="block">
                <img src="images/customers-heroes.png">
                <div>
                    <h3>Turn customers into heroes</h3>
                    <p>We invest in our customers becoming heroes in their organizations. Pendo is their base. Leveling up in context. Demonstrable impact. Then we turn them into durable champions.</p>
                </div>
            </div>

            <hr>

            <h2> Dos and Don’ts</h2>
            <p><b>DO:</b> consider these principles when actively making your design decisions. This is the best time to leverage them.</p>
            <p><b>DO:</b> share these principles with stakeholders and help champion the concepts with them. Ideally, they will also be excited about the opportunity our principles provide to improve the overall product experience. Call it out when/why you used a principle in a design when sharing with stakeholders.</p>
            <p><b>DO:</b> refer to them when applicable in design jams and the design monthly. These are great opportunities to help others see examples of these principles in practice as well as have valuable discussion about ways to improve the design experience.</p>
            <p><b>DO:</b> celebrate others (and yourself!) when a great example of a design principle is displayed. Give a high five! Call it out in Slack. Add a stamp in a design file. This helps build excitement as well as call out when someone is using these practices to help make the product and the user experience better through using our unified ideals.</p>


            <p><b>DON’T:</b> ignore context, best practices or project needs when using a principle. The principles should help guide our decisions and ensure we’re all considering the same “source of truth” for what a great product experience looks like. However, they shouldn’t be used to force an experience just to adhere to the principle. Best practices in UX should always be prioritized.</p>
            <p><b>DON’T:</b> assume everyone views the principle exactly the same. See disagreements over the principles as an opportunity to help one another learn and grow. </p>
        </div>
    </div>
</template>


<style lang="scss" scoped>
.home {
    max-width: 730px;
    margin: 0 auto;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
}

.body-content{
    text-align: left;
}

.block{
    display: flex;
    align-items: flex-start;
    img{
        object-fit: contain;
        padding: 24px;
    }
}

img{
    max-width: 100%;
}

h1 {
    font-size: 3em;
    margin: 0;
}

p {
    line-height: 1.5;
}
</style>

