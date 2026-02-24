import jellyfish from 'assets/images/jellyfish.svg'
import { Parallax } from 'react-scroll-parallax'
import { Waves } from './Waves'
import { TooltipBox } from './TooltipBox'
import classNames from 'classnames'

const Highlightable = ({
  children,
  tooltip,
}: {
  children?: React.ReactNode
  tooltip?: string
}) => {
  return (
    <TooltipBox
      tooltipContent={tooltip}
      placement="bottom"
      className={classNames('inline', tooltip && 'cursor-help')}
      tooltipClassName="max-w-[400px] text-justify"
    >
      <span className="text-[var(--p)]">{children}</span>
    </TooltipBox>
  )
}

export const AboutMeSection = () => {
  return (
    <div className="screen-section relative bg-gradient-to-b from-gray-950 to-gray-900 text-white">
      <div id="about-me" className="absolute top-0" />
      <Waves
        fill="rgb(3,7,18)"
        className="bottom-full scale-y-[60%] translate-y-[40%]"
      />

      <div className="container flex flex-col-reverse md:flex-row gap-12">
        <div className="content-right">
          <Parallax
            speed={30}
            className="absolute left-[25%] top-[-4rem] md:top-[2rem] xl:top-[4rem] w-[20%]"
          >
            <img
              src={jellyfish}
              className="w-full animate-jellyfish"
              style={{ animationDelay: '-1.5s' }}
            />
          </Parallax>
          <Parallax
            speed={40}
            className="absolute left-[0%] top-[-4rem] md:top-[6rem] xl:top-[8rem] w-[30%]"
          >
            <img
              src={jellyfish}
              className="w-full animate-jellyfish"
              style={{ animationDelay: '-1s' }}
            />
          </Parallax>
          <Parallax
            speed={50}
            className="absolute left-[40%] top-[-4rem] md:top-[8rem] xl:top-[10rem] w-[45%]"
          >
            <img
              src={jellyfish}
              className="w-full animate-jellyfish"
              style={{ animationDelay: '-0.5s' }}
            />
          </Parallax>
        </div>

        <div className="content-left text-justify text-body text-sm md:text-lg">
          <h1 className="text-3xl text-white font-black text-right">
            <span className="text-[var(--p)]">A</span>bout me
          </h1>
          <p className="mt-6 indent-16">
            Hi, I'm Sebastien Venne! Sebastien Venne is a Software Engineer with experience 
            at <Highlightable>Google</Highlightable>, <Highlightable>Equisoft</Highlightable>, 
            and <Highlightable>Highcode Tech</Highlightable>, where he contributed to large-scale 
            distributed systems and enterprise-level applications. I specialize in building
             scalable, reliable, and high-performance software solutions that support complex
             infrastructure and real-world business needs. A graduate of <Highlightable>Concordia University </Highlightable> 
            with a Bachelor of Science in Computer Science, I bring strong problem-solving skills 
            and a commitment to clean, efficient engineering practices.
          </p>
        </div>
      </div>
    </div>
  )
}
