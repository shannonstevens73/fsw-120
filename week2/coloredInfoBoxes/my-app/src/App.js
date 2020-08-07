import React from 'react'

import InfoBox from "./InfoBox"

function App() {
  return (
    <div>         
      <InfoBox 
        backColor="lightGray"
        title="The Holy Bible"
        subtitle="Jewish(Old Testament)/Christian Holy Book"
        info="This is one of the best selling books of all time. Many people follow it as a guide for how to live their lives. There is a variety of types of writing from wisdom books to prophetic ones. There is much that can be learned from its pages."
      />
      <InfoBox 
        backColor="thistle"
        title="The Lord of the Rings"
        subtitle="Fantasy Book"
        info="This is an Epic Fantasy novel that is one of my all time favorites. Frodo has the One ring made by an evil spirit to control others, and he is charged with destroying it, and his great journey begins."
      />
      <InfoBox 
        backColor="lightGray"
        title="The Hunger Games"
        subtitle="Dystopian Book"
        info="In this book a teenage girl is chosen to go to the Hunger Games to fight to the death against others who have been chosen from the various districts. The games are a way for the Capital to keep control of the citizens, and force them to produce the things the Capital needs."
      />
      <InfoBox 
        backColor="thistle"
        title="Twilight"
        subtitle="A Book About Vampires that Sparkle"
        info="I have to say that I really love this book. It is about a hidden world of vampires, some of whom do not drink the blood of humans. The book is also about a romance between a vampire and a human girl, who eventually becomes a vampire herself."
      />
      <InfoBox 
        backColor="lightGray"
        title="101 Famous Poems"
        subtitle="Book of Poems"
        info="This is a lovely book of poetry containing many famous poems. One of my favorites is a poem named If. The story of the spider and the fly is also really good."
      />
      <InfoBox 
        backColor="thistle"
        title="Harry Potter"
        subtitle="Book About Magic"
        info="This is a coming of age book about Harry Potter who is a wizard. He a attends Hogwarts school, and learns how to use his magic. He learns of good and evil wizards. He is good, and fights evil."
      />
      <InfoBox 
        backColor="lightGray"
        title="Pretty Little Liars"
        subtitle="Mystery About a Stalker"
        info="This is a book about some teenage girls who are being cyber stalked by A. The girls leader Alison has gone missing, then her body was found, but is it really her? Who is harassing them?"
      />
      <InfoBox 
        backColor="thistle"
        title="Dracula"
        subtitle="One of the First Vampire Novels"
        info="This is a book about a shapeshifting, blood drinking creature, and the unfortunate people who become entangled in his story."
      />
      <InfoBox 
        backColor="lightGray"
        title="Cookbooks"
        subtitle="Category of Books for Cooking"
        info="I love to cook. Perusing through various cookbooks, and picking one to try is a favorite thing I like to do. It is more relaxing perusing than the actual cooking, which can be complicated and hard."
      />
      <InfoBox 
        backColor="thistle"
        title="Self Development"
        subtitle="Category of Books for Improving Oneself"
        info="I really love books about productivity, and improving various aspects of your life. It is a worthwile effort to consider yourself, and look for ways to improve."
      />
    </div>
  )
}
    


export default App
