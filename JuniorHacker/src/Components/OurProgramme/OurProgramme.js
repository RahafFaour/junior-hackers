import React, { Component } from "react";
import "../OurProgramme/programs.css";
import Navigation from "../Common/Navigation/Navigation";
import Footer from "../Common/Footer/Footer";

export class programs extends Component {
  render() {
    return (
      <div class="section">
        <Navigation />

        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="disblay-3">Welcome</h1>
            <p className="lead">take a look about our programs</p>
          </div>
        </div>

        <div class="container programs">
          <div class="h4 text-center mb-4 title">
            <h2>OUR PROGRAMS</h2>
          </div>

          <div class="cardd">
            <div class="row">
              <div class="col-md-3 bg-primary">
                <div class="card-body program-header">
                  <h5>
                    Pachachaca <br /> Family <br /> Home
                  </h5>
                </div>
              </div>

              <div class="col-md-9">
                <div class="card-body program-text">
                  <p>
                    Children who are no longer safe will first be removed from
                    the household by the juvenile judge and placed into
                    temporary housing. Unfortunately, the children who grow up
                    in these juvenile facilities in Peru are generally very poor
                    off. Pachachaca wants to show that it can be done
                    differently. Our children receive expert guidance in a warm
                    and safe pedagogical climate, where much attention is paid
                    to the individual development and the acquisition of all
                    kinds of skills that support a healthy life. In addition, we
                    focus attention on developing their relationships with their
                    social environment. The children are stimulated in many ways
                    to maintain contact with their families and the community,
                    and to work toward a safer environment. The goal is
                    ultimately that the children of Pachachaca grow into
                    healthy, independent adults who find their way in Peruvian
                    society.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="cardd">
            <div class="row">
              <div class="col-md-3 bg-danger">
                <div class="card-body program-header">
                  <h5>
                    Educational <br /> community <br /> center{" "}
                  </h5>
                </div>
              </div>

              <div class="col-md-9">
                <div class="card-body program-text">
                  <p>
                    Every Saturday Pachachaca opens its doors to around 50
                    children from the neighborhood. In the summer holidays
                    (January-February in the Southern Hemisphere of Peru) 80
                    children take part actively in our workshops every year.
                    Often, these children cannot go home during the day and they
                    instead hang around on the streets without guidance or are
                    forced to work to contribute to the family household income.
                    Pachachaca offers a place where they feel safe, can play,
                    and are guided in their development. In addition, 40
                    children are intensively coached daily with their homework
                    and take part in workshops aimed at the development of
                    social skills and neighborhood participation.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="cardd">
            <div class="row">
              <div class="col-md-3 bg-warning ">
                <div class="card-body program-header">
                  <h5>
                    Ambulatory assistance <br /> and <br /> empowerment
                  </h5>
                </div>
              </div>

              <div class="col-md-9 ">
                <div class="card-body program-text">
                  <p>
                    We want to provide intensive guidance to the 30 most
                    vulnerable families known to us, some 120 people in total.
                    In addition to activities for children from the
                    neighborhood, we actively assist the parents in raising
                    their children and involve them in the activities of
                    Pachachaca. We work with an experienced psychologist and a
                    social worker who is familiar with the area. Within this
                    section of our programm we started to organize 20 families
                    within their own mini-company and train them, amongst other
                    things, to grow their own food and produce healthy products.
                    This can generate improved income in the long term and
                    financially empower women to offer a more stable family
                    situation to their children. Pachachaca is also committed to
                    the local residents of surrounding communities. Four times a
                    year we organize activities with the children of Pachachaca
                    to join with the residents of their home communities to
                    promote projects where the children play an active role in
                    the organization and implementation. With this approach we
                    contribute to the health and wellbeing of the neighborhoods
                    and communities while restoring the bond of the children
                    with their homes and enhancing the social involvement of the
                    children.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="cardd">
            <div class="row">
              <div class="col-md-3 bg-success ">
                <div class="card-body program-header">
                  <h5>Sustainability</h5>
                </div>
              </div>

              <div class="col-md-9 ">
                <div class="card-body program-text">
                  <p>
                    In 2018, together with the Dutch-Peruvian development
                    organization Por Eso!, we wrote a plan to build an
                    ecologically aware vegetable garden and drying cabinet for
                    use in 2019. In 2019 we started growing and preserving our
                    own vegetables, herbs and fruit throughout the year, both
                    for our use and for the families from the neighborhood.
                    Parents of these families play an active role in the design
                    and maintenance of the vegetable garden and learn how to
                    prepare a healthy meal with the produced.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="cardd">
            <div class="row">
              <div class="col-md-3 bg-info ">
                <div class="card-body program-header">
                  <h5>
                    Monitoring <br /> and <br /> evaluation
                  </h5>
                </div>
              </div>

              <div class="col-md-9 ">
                <div class="card-body program-text">
                  <p>
                    All activities within the various program highlights are
                    systematically monitored. Participant lists are kept along
                    with meeting reports, home visits and related conversations
                    are well recorded. The results are evaluated every six
                    months. This concerns, in particular, the development of
                    skillful behavior in the children on the basis of our
                    developed matrix, the evaluation of personal goals set by
                    the children and parents in cooperation with the
                    psychologist, and their education progress. The evaluation
                    is initiated by the participants themselves. They are fully
                    in charge of the process that defines their needs and goals
                    and determines the necessary steps to achieve these goals.
                    Throughout, monitor and observe the progress with our staff.
                    The Pachachaca team meets monthly to discuss the related
                    activities and progress of the participants. It is essential
                    that our staff monitor for possible problems and track
                    positive results that are keys for maintaining the welfare
                    of the children and their families. Every six months there
                    is consultation to jointly evaluate the various points we
                    monitor and archive the progress of every child and family.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default programs;
