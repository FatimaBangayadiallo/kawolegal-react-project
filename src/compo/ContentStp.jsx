import React from 'react';
import Footer from './FooterHome.jsx';
const Content = () =>{
  return(
    <>
    <div className="container content-contenaire-1">

      <div className="row ligne-1">
        <div className="col-md-3 enfant-1">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAulBMVEX///80SV7nTDzmQjDmPyzmRjUuRFrmRDLlOycwRlvxo5wlPlXyp6D52tf64uAqQVj88O/uhn3s7vD30c4gO1NBVGfwnpYcOFFpd4X99fTqa2D0vLj4+fqTnafW2t6yucD2xcDvk4rg4+bpZln41NCkrLVRYnPO0tfR1dl6hpO5v8ZreYfsfXPrdmvnUUD75+XoWkybpK1JW27zr6nuioHoV0iDjpk8UGV2g5C2vcNaanr0t7Dvl4/1wLuM60G4AAALT0lEQVR4nO1ba3uiSgwGBIQdKxVRtPVWWmurrbZqxdXt//9bh9vcAG3PLiO7PHk/FQiSN5NJMpmpJAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/JNYTdrXD7+2x37ZiojCD+XlVVs2bl+W12WrIgafb+3t8Tocv8Zr2bqIwevkNRm7vlZJP50YE+yc7bdSNRGE2+Uk+etqa9yWqYkg9JdX9OK2imN4rfSlPpl9b1UMpjcb6XOFLyqZLlYfL61m+MdA6reqmS0eNi/3Tan/qX0orUomi7tuS9osl8r9w6qS/IJ8L70GsWa1+lry38Sx0X79h5Jg/zoN4nft4yQdJleft1fS/U18u9+e0LzYnxwfMr/dnjRZgTbv0s12M/1G8Vi1lHoaSivyvvaHoRq1Bqfxnaqqxn2i9kYJBO4TWsfo4or78YZiGOTeRgsEPib0afvNMNS3iSQWq2VNyaIWZri2qoV/G11G/EUNb2lKZIGuEV3UIgbH+EJjhzERUCJ7NOILo00IGlp041Msw20ewYDinSTda/HfKvWkiRHfqreCi2Zyod0EF9eJcEInwhWWfgkuVsmHtA/8FL+xFBuMl7kEFWUpNVXM9geRbmn4eaDVD2wcIxjRTyytvRGFu1igHghssIAaO21Twb+lTkQS7BOV0+i3ic4tIn6DxetNhq4R6NwgvlAnFQ4RCEkRe8SEVkvy5dpRJEPiiilo99LvMlTUu68Z9pnvqmIZHo1chsbx9xkq6uZLhjd15ltXuZoVhl9GLQC1qBamC+NO+gOGSm3yBcMX1h5bsQSDmPaj2+0S1bWXu+32VxjR/4ChojXPMtyqVFRtnVKsWPyoM8rE+COGH9dnGHYZgsZdnjoC0CUMaUImDF+aGPdYsS8YKvWbkwwVdg6qvy5E8CzDoGrBoAy+YKjUticZMtFb7Z5T6nIMc/AlQ0VtnGJIYTTO6fS3Mwzm290XDOubyxEUwVBZklmbz1C7aHunQIY5RdKJMWQK3n+Jodb9+C5D0fWaIIbq5CFTCJ6MpUnxUzrD/5Ut1NtkrXuKobZl8mFdcE36PYbaTQPj7VsMM8tqvqZ5aDDeoV2qW3eOYZ3WHd+o2kKG/Rs+3PAM21KLWkC71J7HWYa0dPwmQ3Z9m8eQXR3Wby7TUS6YofTAhak0Q2nFPKy9/JMM+ZV1hiEXqC9TnBbOULpjOWQYSkf28SWiTfEM2UZFDkPWAqrgjmmE9Pe/w3DLMtxkGF5/kHCSx1B6JRa4SGlD2p20/Uv7pXSNQ0iF/VIybGG/lNiDmuiKUKgFArfpL1AL0Da4QJCW9T29d6bnXQsbGyuDfSeR1j5o8L/FPe/X3C9gE5IuuFjcxpsINaaKesjZt2jF+xbxxv0m2beILHAV/4DKjgfet1gxX+DslX1FID7fVFW94crEh/CWwi9Tu1oolgS/44eq1vA77fvgyRuv7WYZCLwmnCaZL0zua6r2erHSdNB8yGzmXU3a6aLqmtsRvHpgIn3OD3wlsGpW8RgHAHAZePPpcDeczkeDsjURgsH4YDnIsizkoM7QK1ud4jF6dEwZw0T6tGyFisbM0mUWprsrW6ViYeumnII7L1upQrG30gRls1O2UkXCdigxwtV5KlutAjEnDPXD0E8cFlUp2EwRYTiQ5smFVaVYMyZjaI0I3UoxHLlkGspDHFXRe9lqFQmfJIuKRhppTCYigX4oW6lCMeikM77pjspWqkh4HT1F0NJnZStVJDw5TdDc25Lt2WUrVhQG6zRBWZ/OezLSexUJNsNsmJEtFLLW3Z9lK1cE7MwIMt6KqrAUpkWp7GfWUJVI+0Oc49HYk9MUK1G67TBD05ae0ivhSowhYYiCFDhKUXSrkBbfcSg1/YDOnFvtV8JJpRmJNKbjP/Kh9LFs5QrBgImgJu+jVenVTB35BEy5bN2KweDxZM63KtLf9/RTFFFFGEqez5emJkompFOZ5YW9sxAJMrqz/un50bC6VShLE3jDR91xEHIcuTcPfNNbu5blVquTIdlP8/F4PkocczB+3o+rMg0BgDJgZ5E3pezZeDo9v29vP/08I2LPp9MZ/2g0fh8Lb0TODmYW8iL1XXt6MMPoiRzk7/O3QwfjnhyLOP5iniFpP1th9PXH9JbXi8QfxS66Zm5eiWJaiKU4eJcdnT5z1jkcpz4jojudMf/YXsd1gukO8a2RbiUpVegOcrY5mGTyNZWZ+Q6/jNDdXqp+Ga1TIqb7yIksSCGEd8QHpLMstIXlnVwq0Apl7GZ6TrLlc248d3JETMb7RvQ72HbMKgUNJWF4Os0QU5i6eY91nWkA59kgHBpKccrUsontDtR7TMZhioadPXWA9UicbH7CBrpPvHCW0yWOFNeJH7CnG5xoitrsS0hg0T7MHaHgm/v4uWflDU8Iq4etlO2cYis84pD6yIjovYzlhG4/Prvh6a0IrG6dRLcevWsGecBhhNwkXD6jlAhl4yQTzOZsoIcjxp1Zcca5uhWEp/dhAqYFoyezcEaHGK2ns9FsJxPNTDmyAhNEUOc9EBn6VPnE/UacHzvB/BxwnC/UpttRxRy8ydIj4cAZxqNq01F1oiMmz/R6l4jsCaGkScxP5pDPEzc7LrOHPKbfxM7FnA4it6QBCYJ62D+ksQrRgSBWMGNvf+fGMAydqTv+BQgyjmQRi5KTJWw89+gIBbFyjg2TOG0Em3Qancjd93xdEbyXamiJDKZYJ598kskDxAMddm+Q3p2zezXssajU3TUfbdHUTiUYV/z2KhMzLVqukCBvsTYmsyqcZWSmOmzpRXrjUQxJZ119kT7PgYQG0xBDGgqYyE1OXfBFB3HTUH2a6djlBOGkLyQ23CbC/iGVQoUHUybWMfGC9vD5PQmyEWw9Uwc0fY6hjxmG6f0n/vk1ZoYJLvC14GDq0e6gdWAUpWPY4cX/xxiGtRGeleaB906dXJsdoX0s5nyFKXNBjUQ8lD8PgzCywCLcqSF+HuK5qu9tLjGiKZETG0xpgk4XiLvcQElIRbGUDOgw98VwVmNnD0S4LOF6ZIY6Ihf6zELNTR2EJaPFzjK6lAgjLK3rdDoMHi0DPGYZEdiJPa0S5Hkv14QFg1n7oOfUM+pU1p7cI0uJKIoMSNSwetgK1O2jEEXOawZjzi5IAw8eMH+Lgk2PVORUh3QFgBbxEM1oaRD3I+iooEOcEkdrvnQllVFQ4LDH/kLPxKFY72W+XRSYiWEeFj2M53heMAsHy9qP59MD7VckSZJJ5zpaTHmRKMDSAsfm6ntzQIOQuGC6Y8O3qRNYyX+JsM915CAmUOCjF+8OL8Ik83gJSfsVA/YkQJRICGFLUDdqdmKJL2MftDNnLTFIaXB6W9haRM87bN1AZ0VU65I1hqhgujvZp4nrrWAhd6KNwZQG2dNRyS+so6lLs38010iuiWpdLreKQO/krjyp1Oa5jTRrzaTop3wb+LHjcSUQjTtxoUYiuaiOYs5/+JARwNFtpmeFnB4bGDw/532EW8I2n/PwZXxF6DuCxnB+Zh6SNYbXc/ihtniDe37WE3S0IzbAK7NkfZX4TdLoPmDCovreO1fP2ZkxTd1dsIZ4pB00E1l7TpssQR0h9sSwF/3XgukmB/ueIrcn7Ur+oQDMe508HFJOM9utLddxXFc+THlrswT1QMRxzcN7SqQXvEh3ncaOg+jOh3fgHpYJezSbz7x0YmYDKVrkioTvPrF3vel0dPLh3wabI1i2NiLA1Dxo8RePxG9jQLtoqFdFgsxSoZojKNGiqKIjKJHSvboEwy1iSw/Kg+oSDEqU58OiEv8PBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgN/Ff8NJ/injcXErAAAAAElFTkSuQmCC"
            className="img-fluid image-enfant-1"
            alt="..."
          />
        </div>
        <div className="col-md-9 enfant-2">
          <h4 style={{fontSize: "30px",color: "lightskyblue"}}>Think and Zoom</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
            explicabo?
          </p>
          <button type="button" className="btn btn-info but-information-1">
            See full details
          </button>
          <hr />
        </div>
      </div>

      <div className="row ligne-2">
        <div className="col-md-3 enfant-1-row-2">
          <img
            src="https://banner2.cleanpng.com/20190424/ikg/kisspng-logo-shutterstock-stock-photography-vector-graphic-slatecube-discussions-see-what-weampaposve-be-5cbfe6ea005925.5380480615560803620014.jpg"
            className="img-fluid image-enfant-1"
            alt="..."
          />
        </div>
        <div className="col-md-9 enfant-2-row-2">
          <h4 style={{fontSize: "30px",color: "lightskyblue"}}>Slatecube</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
            explicabo? Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet
            consectetur.
          </p>
          <button type="button" className="btn btn-info but-information-1">
            See full details
          </button>
          <hr />
        </div>
      </div>

      <div className="row ligne-3">
        <div className="col-md-3 enfant-1-row-3">
          <img
            src="https://www.startupchile.org/wp-content/uploads/2016/10/Ajumah.com_.png"
            className="img-fluid image-enfant-1-row-3"
            alt="..."
          />
        </div>
        <div className="col-md-9 enfant-2-row-3">
          <h4 style={{fontSize:"30px",color:"lightskyblue"}}>Slatecube</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing eli dolor sit
            amet. Lorem ipsum dolor sit amet consectetur.
          </p>
          <button type="button" className="btn btn-info but-information-1">
            See full details
          </button>
          <hr />
        </div>
      </div>

    </div>
    <Footer/>
  </>  

  );
}
export default Content;
