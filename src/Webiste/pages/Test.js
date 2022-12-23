import React, { useState, useEffect } from "react";
import axios from "axios";
import { fetchPedigree, STATUSES } from "../redux/getReducer/getPedigree";
import { useDispatch, useSelector } from "react-redux";

const Test = () => {
  const [Data, setData] = useState();
  const { data: Pedigree, status } = useSelector((state) => state.Pedigree);
  const dispatch = useDispatch();

  const id = 'f6ce4bd2-bf2f-4af7-96ad-71acbea41cfc'
  useEffect(() => {
    dispatch(fetchPedigree({id}));
  }, []);

  console.log(Pedigree, "da");
  return (
    <div>
      <div className="RaceDetailCard">
        <div className="Pedigree">
          {Pedigree.length === 0 ? (
            <h3>Loading ...</h3>
          ) : (
            <div className="wrapper">
              <div className="one">
                <div className="sire pedigreeclass">
                  {Pedigree.generation1 === null ? (
                    <>N/A</>
                  ) : Pedigree.generation1.SireData === null ? (
                    <>N/A</>
                  ) : (
                    Pedigree.generation1.SireData.NameEn
                  )}
                </div>
                <div className="dam pedigreeclass">
                  {Pedigree.generation1 === null ? (
                    <>N/A</>
                  ) : Pedigree.generation1.DamData === null ? (
                    <>N/A</>
                  ) : (
                    Pedigree.generation1.DamData.NameEn
                  )}
                </div>
              </div>
              <div className="two">
                <div className="gsire pedigreeclass">
               { Pedigree.generation2b === null ? (
                    <>N/A</>
                  ) : Pedigree.generation2b.SireData === null ? (
                    <>N/A</>
                  ) : (
                    Pedigree.generation2b.SireData.NameEn
                  )}
                </div>
                <div className="gdam pedigreeclass">
                {Pedigree.generation2b === null ? (
                    <>N/A</>
                  ) : Pedigree.generation2b.DamData === null ? (
                    <>N/A</>
                  ) : (
                    Pedigree.generation2b.DamData.NameEn
                  )}
                </div>
                <div className="gsire pedigreeclass">
                {Pedigree.generation2a === null ? (
                    <>N/A</>
                  ) : Pedigree.generation2a.SireData === null ? (
                    <>N/A</>
                  ) : (
                    Pedigree.generation2a.SireData.NameEn
                  )}
                </div>
                <div className="gdam pedigreeclass">
                {Pedigree.generation2a === null ? (
                    <>N/A</>
                  ) : Pedigree.generation2a.DamData === null ? (
                    <>N/A</>
                  ) : (
                    Pedigree.generation2a.DamData.NameEn
                  )}
                </div>
              </div>
              <div className="three">
              <div className="ggsire pedigreeclass">
              {Pedigree.generation3d === null ? (
                    <>N/A</>
                  ) : Pedigree.generation3d.SireData === null ? (
                    <>N/A</>
                  ) : (
                    Pedigree.generation3d.SireData.NameEn
                  )}
                </div>
                <div className="ggdam pedigreeclass">
                {Pedigree.generation3d === null ? (
                    <>N/A</>
                  ) : Pedigree.generation3d.DamData === null ? (
                    <>N/A</>
                  ) : (
                    Pedigree.generation3d.DamData.NameEn
                  )}
                </div>
                <div className="ggsire pedigreeclass">
                {Pedigree.generation3c === null ? (
                    <>N/A</>
                  ) : Pedigree.generation3c.SireData === null ? (
                    <>N/A</>
                  ) : (
                    Pedigree.generation3c.SireData.NameEn
                  )}
                </div>
                <div className="ggdam pedigreeclass">
                {Pedigree.generation3c === null ? (
                    <>N/A</>
                  ) : Pedigree.generation3c.DamData === null ? (
                    <>N/A</>
                  ) : (
                    Pedigree.generation3c.DamData.NameEn
                  )}
                </div>
                <div className="ggsire pedigreeclass">
                  {Pedigree.generation3b === null ? (
                    <>N/A</>
                  ) : Pedigree.generation3b.SireData === null ? (
                    <>N/A</>
                  ) : Pedigree.generation3b.SireData === null ? (
                    <>N/A</>
                  ) : (
                    Pedigree.generation3b.SireData.NameEn
                  )}
                </div>
                <div className="ggdam pedigreeclass">
                  {Pedigree.generation3b === null ? (
                    <>N/A</>
                  ) : Pedigree.generation3a.DamData === null ? (
                    <>N/A</>
                  ) : (
                    Pedigree.generation3b.DamData.NameEn === null ? <>N/A</> :  Pedigree.generation3b.DamData.NameEn
                  )}
                </div>
                <div className="ggsire pedigreeclass">
                  {Pedigree.generation3a === null ? (
                    <>N/A</>
                  ) : Pedigree.generation3a.SireData === null ? (
                    <>N/A</>
                  ) : (
                    Pedigree.generation3a.SireData.NameEn
                  )}
                </div>
                <div className="ggdam pedigreeclass">
                  {Pedigree.generation3a === null ? (
                    <>N/A</>
                  ) : Pedigree.generation3a.DamData === null ? (
                    <>N/A</>
                  ) : (
                    Pedigree.generation3a.DamData.NameEn
                  )}
                </div>
                
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Test;
