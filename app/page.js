import Feed from "@/components/Feed"

export default function Home() {
  return (
        <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        정보공유 사이트
        <br />
      </h1>

        <p className="desc text-center">
          동현아파트 재건축 뉴스/정보 공유 사이트
      </p>
      <Feed />
   </section>
  )
}
