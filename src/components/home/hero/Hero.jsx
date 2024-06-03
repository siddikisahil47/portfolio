import React from 'react'
import './hero.css'
import { profile } from '../../assetsfile/Image'

const Hero = () => {
    return (
        <section className='hero-section'>
            <div className='hero-detail'>
                <div className='hero-social'>
                    <div>insta</div>
                    <div>linkdein</div>
                    <div>github</div>
                    <div>kaggle</div>
                    <div>twitter</div>
                </div>
                <div className='hero-heading'>
                    <h1 className='hero-title'>Hey there,</h1>
                    <span className='line'>
                        it's Sahil Siddiki
                    </span>
                </div>
                <div>
                    <p className='hero-title-text'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum deserunt nisi, iste expedita eveniet possimus rem, odio tenetur maiores suscipit nihil. Itaque perspiciatis assumenda doloremque iste, placeat sequi facilis eveniet vitae nobis similique earum libero soluta possimus accusamus, perferendis repudiandae voluptatibus inventore voluptatum. Consequatur voluptas eligendi harum aut architecto optio deserunt totam esse doloribus reiciendis aliquid in nobis vel at ullam </p>
                </div>
                <div className='hero-buttons'>
                    <button>Say Hello</button>
                    <button>Resume</button>
                </div>
            </div>
            <div className='hero-image'>
                    <img src={profile} alt="Profile pic" className='heroImageProfile' />
            </div>
        </section>
    )
}

export default Hero