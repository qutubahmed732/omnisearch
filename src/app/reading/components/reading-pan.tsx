"use client";

export default function ReadingPane() {

  return (
    <main className="flex-1 w-full max-w-4xl mx-auto px-6 py-12 md:py-20 relative">

      <div className="mb-16 text-center">
        <p className="text-[#1754cf] font-bold tracking-[0.2em] uppercase text-xs mb-4">
          Gospel of John
        </p>
        <h1 className="text-5xl md:text-7xl font-heading font-black text-slate-900 mb-6">
          Chapter 1
        </h1>
        <div className="h-1 w-20 bg-[#1754cf] mx-auto rounded-full" />
      </div>

      <article className="font-serif text-lg md:text-xl text-slate-800 line-generous space-y-8">
        <h3 className="font-heading text-2xl md:text-3xl text-slate-900 italic mb-4">
          The Word Became Flesh
        </h3>
        <p className="relative">
          <span className="verse-number">1</span>In the beginning was the Word,
          and the Word was with God, and the Word was God.
          <span className="verse-number">2</span>He was with God in the
          beginning.
          <span className="verse-number">3</span>Through him all things were
          made; without him nothing was made that has been made.
          <span className="verse-number">4</span>In him was life, and that life
          was the light of all mankind.
          <span className="verse-number">5</span>The light shines in the
          darkness, and the darkness has not overcome it.
        </p>

        <p className="relative group">
          <span className="verse-number">6</span>There was a man sent from God
          whose name was John.
          <span className="verse-number">7</span>He came as a witness to testify
          concerning that light, so that through him all might believe.
          <span className="verse-number">8</span>He himself was not the light;
          he came only as a witness to the light.
        </p>

        {/* Selected Verse Example with Toolbox Overlay */}
        <div className="relative bg-[#1754cf]/10 rounded-xl px-4 py-2 -mx-4 border-l-4 border-[#1754cf] shadow-sm">
          <p className="relative">
            <span className="verse-number text-primary opacity-100">9</span>The
            true light that gives light to everyone was coming into the world.
            <span className="verse-number text-primary opacity-100">10</span>He
            was in the world, and though the world was made through him, the
            world did not recognize him.
          </p>
        </div>

        <p className="relative">
          <span className="verse-number">11</span>He came to that which was his
          own, but his own did not receive him.
          <span className="verse-number">12</span>Yet to all who did receive
          him, to those who believed in his name, he gave the right to become
          children of God—
          <span className="verse-number">13</span>children born not of natural
          descent, nor of human decision or a husband’s will, but born of God.
        </p>
        <p className="relative">
          <span className="verse-number">14</span>The Word became flesh and made
          his dwelling among us. We have seen his glory, the glory of the one
          and only Son, who came from the Father, full of grace and truth.
        </p>
      </article>
      {/* Bottom Margin for Navigator */}
      <div className="h-32" />
    </main>
  )
}