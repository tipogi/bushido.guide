import './styles/circle-loader.style.scss';

export enum LoaderTypes {
  MARKET = 'Market',
  EXPLORER = 'Explorer'
}

interface ILoaderProps {
  type: LoaderTypes
}

export default function Loader({ type }: ILoaderProps) {

  const renderLoader = (loader: number) => {
    if (loader === 1) {
      return (
        <div className='loader loader1'>
          <div>
            <div>
              <div>
                <div>
                  <div>
                    <div>
                      <div>
                        <div>
                          <div>
                            <div></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    } else {
      return (
        <div className='loader loader2'>
          <div>
            <div>
              <div>
                <div>
                  <div>
                    <div></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }
  }

  return (
    <div className={`${type}-loader`} style={{ marginTop: '100px', color: 'white'}}>
      { renderLoader(Math.floor(Math.random() * 2)) }
    </div>
  )
}