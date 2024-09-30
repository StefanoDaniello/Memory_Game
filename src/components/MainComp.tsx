import CardComp from "./CardComp";
import { useContextApp } from "../store/context";
function MainComp() {
  const { cardList } = useContextApp();
  return (
    <main className="container">
      <div className="row">
        {cardList.map((item) => (
          <div className="col-12 col-md-6 col-lg-4" key={ item.id}>
            <CardComp
              key={item.id}
              id={item.id}
              img={item.img}
              code={item.code}
            ></CardComp>
          </div>
        ))}
      </div>
    </main>
  );
}

export default MainComp;
