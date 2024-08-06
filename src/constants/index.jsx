export const productData = [
  {
    id: 1,
    title: "Oat Latte",
    image: "/img/Coffee.webp",
    color: "bg-[#a99b8e]",
    link: "https://oatside.com/id/products/oat-latte/",
    description:
      "Imagine a world where oat milk is a guaranteed part of your latte. Yep, it's real. We discovered that we are unique, expertly roasting coffee beans perfectly paired with the deliciously creamy taste of our Oat Barista Blend.",
  },
  {
    id: 2,
    title: "Barista Blend",
    image: "/img/Milk.webp",
    color: "bg-[#FEDF6F]",
    link: "https://oatside.com/id/products/barista-blend/",
    description:
      "If you have a steamer, you can create very smooth and dense microfoam with Oatside. That's why baristas love us so much.",
  },
  {
    id: 3,
    title: "Chocolate",
    image: "/img/Choc.webp",
    color: "bg-[#C0C6FE]",
    link: "https://oatside.com/id/products/chocolate/",
    description:
      "ONLY REAL CACAO (we use twice the amount of cacao than most), NEVER ADDED-FLAVORS, and LESS SUGAR (our sugar content is 40-60% lower than most, and we use raw palm nectar instead of refined cane sugar)",
  },
];

export const wordsMarquee = [
  {
    text: "like many of you,",
    bgColor: "bg-[#C9DA8F]",
    textColor: "text-[#1C461F]",
  },
  {
    text: "we used to be",
    bgColor: "bg-[#BEADE1]",
    textColor: "text-[#52225E] ",
  },
  {
    text: "full-fat-only,",
    bgColor: "bg-[#F682A5]",
    textColor: "text-[#52225E] ",
  },
  {
    text: "jersey-cow-milk,",
    bgColor: "bg-[#C0C6FE]",
    textColor: "text-[#020B66] ",
  },
  {
    text: "Drinkers.",
    bgColor: "bg-[#F9A474]",
    textColor: "text-[#582614] ",
  },
];

export const wordsLink = [
  {
    textTitle: "Dear cows",
    textStyle: "text-md text-blue-500  font-semibold",
    textShort: "We don’t know how to say this but... there’s someone else.",
    content: (
      <>
        <div className="text-start py-4 w-full ">
          <p className="font-normal text-[0.875rem] text-start text-zinc-700 leading-8">
            Look, it’s not you, it’s us. We had a great run, but now you’re
            kinda holding us back. It’s our fault, we loved you so much that we
            bred you in unsustainable numbers and we’ll admit it.
            <br />
            We screwed up.
            <br />
            We stripped you of your independence and your neediness for
            resources drove us into the arms of another.
            <br />
            (Also, we never quite knew how to bring it up, but your methane
            burps are literally toxic and causing global warming. Not your fault
            but, just saying.)
            <br />
            After being together for so long, you deserve to know.
            <br />
            Their name is Oat.
            <br />
            They’re kinda like you – creamy and delicious – and there’s no easy
            way to say this, but we just feel better about ourselves being with
            them.
            <br />
            We hope you understand, and wish you nothing but the best.
            <br />
            Love,
            <br />
            Us
          </p>
        </div>
      </>
    ),
  },

  {
    textTitle: "Contact us",
    content: (
      <>
        <p className="font-normal text-[1rem] text-center text-zinc-700">
          Susu Oat kami diracik khusus untuk menghasilkan foam yang padat dan
          lembut saat di steam. Kalau hasilnya ga memuaskan, tolong hubungi kita
          contact di
          <span className="text-blue-500 font-semibold text-[1.2rem] block">
            @oatside.com
          </span>{" "}
          Dan kalau ternyata memuaskan, boleh banget hubungin kita juga, karna
          kita kesepian gaada yang menghubungi.
        </p>
      </>
    ),
  },
  {
    textTitle: "FAQ",
    textTitle2: "Frequently Asked Questions",
    content: (
      <>
        <div className="text-start mt-4 py-2 w-full border-b-2 border-zinc-700/20">
          <h1 className="font-semibold text-[1rem] text-start text-zinc-900 leading-8">
            What is Oatside?
          </h1>
          <p className="font-normal text-[0.875rem] text-start text-zinc-700 leading-8">
            Oatside is Asia’s delicious take on oat milk, made creamier and
            maltier than the plant milks you’re used to. We keep our labels
            clean (which means no gums, emulsifiers or preservatives) and we
            only use real ingredients (real oats and cacao).
          </p>
        </div>
        <div className="text-start py-2 w-full border-b-2 border-zinc-700/20  ">
          <h1 className="font-semibold text-[1rem] text-start text-zinc-900 leading-8">
            Why does Oatside exist? What is your mission?
          </h1>
          <p className="font-normal text-[0.875rem] text-start text-zinc-700 leading-8">
            We know that plant milks are the sustainable future of milk, but
            taste is often a barrier. By being the best tasting not-milk, we
            want to be THE plant milk for people who don’t care for plant milks.
          </p>
        </div>
        <div className="text-start py-2 w-full pb-12 border-b-2 border-zinc-700/20  ">
          <h1 className="font-semibold text-[1rem] text-start text-zinc-900 leading-8">
            Where is Oatside made?
          </h1>
          <p className="font-normal text-[0.875rem] text-start text-zinc-700 leading-8">
            Oatside is produced in mountainous Bandung (that’s in Indonesia!)
            where we have direct access to natural spring water, untouched by
            humans.
            <br />
            We have built an in-house, state-of-the-art facility with a highly
            automated production line to ensure the process of milking oats is
            pure and unadulterated!
          </p>
        </div>
      </>
    ),
  },
];
