import React from "react";
import PropTypes from "prop-types";
import Like from "./Like";
import buttonedited from "../assets/buttonedited.png";
import comment from "../assets/comment.png";
import heart from "../assets/heart.png";
import Comment from "./Comment";
import CommunicationPlanCard from "./CommunicationPlanCard";
import "./NewsFeed.css";

function NewsFeed({ communicationPlans }) {
  return (
    <section className="content">
      <article className="article">
        <div className="profil">
          <div className="userprofil">
            <img
              className="imageprofil"
              src="https://media-exp1.licdn.com/dms/image/D4E03AQEKkzhQP5r5lg/profile-displayphoto-shrink_800_800/0/1670411909070?e=1675900800&v=beta&t=QJDauJPYN2CGqSL-Ky0sPjnN9w09IyXjWoivLOlFQKg"
              alt="Avatar Profil"
            />
            <div className="nameuser">
              <p>Simon B</p>
              <div className="cityandcompany">
                <p>Reims</p>
                <p>WCS</p>
              </div>
            </div>
          </div>
          <div className="userparameter">
            <p className="dateofpublish">5 jours</p>
            <img
              className="buttonedited"
              src={buttonedited}
              alt="icon edited and remove"
            />
          </div>
        </div>
        <img
          className="imagecontent"
          src="https://remeng.rosselcdn.net/sites/default/files/dpistyles_v2/ena_16_9_extra_big/2018/12/10/node_20755/530170/public/2018/12/10/B9717886568Z.1_20181210094232_000%2BGERCIOLFT.1-0.jpg?itok=t6jVgxVZ1544431361"
          alt="imagecontent"
        />
        {/* <div>
          {communicationPlans.map((communicationPlan) => {
            return (
              <CommunicationPlanCard
                title={communicationPlan.title}
                content={communicationPlan.content}
                key={communicationPlan.title}
              />
            );
          })}
        </div> */}
        <div className="contentofpublication">
          <h1 className="titlecontent">
            Enedis constate une baisse historique de 20% de la consommation
            électrique de l'éclairage public
          </h1>
          <p className="descriptioncontent">
            Au cours des 15 premiers jours de décembre 2022, Enedis constate une
            baisse historique de 20% de la consommation de l'éclairage public en
            France. Alors que chacun cherche les leviers de sobriété, les
            collectivités mettent en oeuvre celui de l'éclairage public, qui
            représente plus de 40% de leur consommation électrique annuelle.
          </p>
        </div>
        <div className="buttonlikeandcomment">
          <div className="likeandcount">
            <p className="numberoflike"> 4 </p>
            <img src={heart} className="countoflike" alt="countoflike" />
          </div>
          <div className="buttonlikeandcomments">
            <div className="likes">
              <Like isFavorite={false} />
              <p className="styleoflike">J'aime</p>
            </div>
            <div className="comments">
              <img className="comment" src={comment} alt="comment" />
              <p className="styleofcomment">Je commente</p>
            </div>
          </div>
        </div>
        <Comment />
      </article>
      <article className="article">
        <div className="profil">
          <img
            className="imageprofil"
            src="https://media.licdn.com/dms/image/D4E35AQF5X3q2dvbUjA/profile-framedphoto-shrink_800_800/0/1663860060762?e=1672066800&v=beta&t=_2Bg4Cev7U-acvNU32BNp0ekym36jot97UwQZAF2h7M"
            alt="Avatar Profil"
          />
          <p>Olivier N</p>
        </div>
        <img
          className="imagecontent"
          src="https://www.enedis.fr/sites/default/files/styles/image_full/public/images/2022-01/enedis-notre-histoire.jpg?itok=0cK77Jh0"
          alt="imagecontent"
        />
        <div>
          {communicationPlans.map((communicationPlan) => {
            return (
              <CommunicationPlanCard
                title={communicationPlan.title}
                content={communicationPlan.content}
                key={communicationPlan.title}
              />
            );
          })}
        </div>
        <Like isFavorite={false} />
      </article>
      <article className="article">
        <div className="profil">
          <img
            className="imageprofil"
            src="https://media-exp1.licdn.com/dms/image/D4E03AQGfq_Zm3TiWog/profile-displayphoto-shrink_800_800/0/1670508543662?e=1675900800&v=beta&t=YfaQytlNMmOVu4Cs1SLDEcK3ZsOrZVYllK-T5AQtUUo"
            alt="Avatar Profil"
          />
          <p>Farid H</p>
        </div>
        <img
          className="imagecontent"
          src="https://www.creads.com/wp-content/uploads/2021/05/nouveau-logo-erdf-enedis-1024x682-1.jpg"
          alt="imagecontent"
        />
        <div>
          {communicationPlans.map((communicationPlan) => {
            return (
              <CommunicationPlanCard
                title={communicationPlan.title}
                content={communicationPlan.content}
                key={communicationPlan.title}
              />
            );
          })}
        </div>
        <Like isFavorite={false} />
      </article>
      <article className="article">
        <div className="profil">
          <img
            className="imageprofil"
            src="https://media.licdn.com/dms/image/D4E35AQFi4xZrBf0K2w/profile-framedphoto-shrink_800_800/0/1667069647405?e=1672066800&v=beta&t=rk0bP8vy8NT_kjMF79tgj444e_Ymg_wDUZVnKKJmbkI"
            alt="Avatar Profil"
          />
          <p>Adnan B</p>
        </div>
        <img
          className="imagecontent"
          src="https://media.lesechos.com/api/v1/images/view/5d96cae73e454674b96053c5/1280x720/0601987664512-web-tete.jpg"
          alt="imagecontent"
        />
        <div>
          {communicationPlans.map((communicationPlan) => {
            return (
              <CommunicationPlanCard
                title={communicationPlan.title}
                content={communicationPlan.content}
                key={communicationPlan.title}
              />
            );
          })}
        </div>
        <Like isFavorite={false} />
      </article>
      <article className="article">
        <div className="profil">
          <img
            className="imageprofil"
            src="https://media-exp1.licdn.com/dms/image/D4E03AQFh_00lRkCTnw/profile-displayphoto-shrink_800_800/0/1665997512112?e=1675900800&v=beta&t=jnIBPdTukdIYcP-qLFEh7g6tXVNAklT36xgj8XfQC1g"
            alt="Avatar Profil"
          />
          <p>Pierre-Yves G</p>
        </div>
        <img
          className="imagecontent"
          src="https://t4.ftcdn.net/jpg/03/72/67/23/360_F_372672331_idaVL5JtVPgfeUOEJkdrXBe8qgV3rOaQ.jpg"
          alt="imagecontent"
        />
        <div>
          {communicationPlans.map((communicationPlan) => {
            return (
              <CommunicationPlanCard
                title={communicationPlan.title}
                content={communicationPlan.content}
                key={communicationPlan.title}
              />
            );
          })}
        </div>
        <Like isFavorite={false} />
      </article>
      {communicationPlans.map((communicationPlan) => {
        return (
          <CommunicationPlanCard
            title={communicationPlan.title}
            content={communicationPlan.content}
            image_url={communicationPlan.image_url}
            key={communicationPlan.title}
          />
        );
      })}
    </section>
  );
}

NewsFeed.propTypes = {
  communicationPlans: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      image_url: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

export default NewsFeed;
