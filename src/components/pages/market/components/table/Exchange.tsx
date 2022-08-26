import { useCallback } from "react";

const BISQ_BASE64 = 'data:image/webp;base64,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';
const HODLHODL_BASE64 = 'data:image/webp;base64,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'
const ROBOSATS_BASE64 = 'data:image/webp;base64,UklGRtYcAABXRUJQVlA4IMocAADQlACdASrnAegBPikUiUMhoSERedxMGAKEsrd+PkzUYdyASwCtN5X/j9aq/YfyG8GzbvZPxe/tP7I+gnoF7T99fyF7KiuPOj8Q/LP8L/ZfyG9gD2K/dr7gH8R/jX+G/sX+D/8/+J+FX1Pf2v0Af07/A/9f/Qe8B/ff2W9139c/ZT3AP6N/lv/5/0+0R9AX9tPVq/3v7dfBV+0//w/13wI/rt/5vz////0AegB04/aj+cfkn4U/3P8t/cfys+NPaXdoNSb4p9p/w39Z/cnznPAv8X/h/9N6gX4n/Kv8V+Uf5Q/Ro9M5ZdwvUC9ffqX+/8Lj+q9GfEA/kv7oeoH/B8Ez7f6gH8p/wf/C+8D6Rf5X/uf5zzX/lf+L/7v+n+AL+Tf1n/mf4P8l/mN9cH7Qf/n3GP10/8whubXcAWAsBYCwFgLAWAsBYCwFgLAWAsBYCwFgLAWAsBYCwFgLAWAsBYCwFgLAWAsBYCwFgLAWAsBYCvv+A7nr2pKTomZY3hd7WsxFMXYZgLIFIMzACwFgLAWArBZSNf1vYns6iZEI1jplT8ierNQcIgqOHTjdvBYl3AFgLAP4QCPn9oaFmRzjdwBYCvxgRcAWAsBBN3iIAf/dlEXAFgLAVgsS7gCwFY8Gx1W/syEQn0BYCwFgH22tdv79IjorxovzWU8huqdZnAUZXhuGXyCo4PprZKgOcOgV+7R+75L5mDZ33T/f+q3l0QKgzcMvkFQrLqRG0BNmrTFIo7CENlvrgIGPYhMS4gPEcycibQOSAsBYCwD7aoS5qv7SvYPwJnpFF6C8d+k0Y+vdf3GXq+ay6Jul//+uMnUCsemacbuAK+0UlU5xw0i635kLkEStlCiu+4RK7EE1HpUvGo2q/td5x1v/6s154XhWuNABYCwGLtgVfRC59jWc+ESM44aC//oQUMYGjYixqgAsBYCwFgLAPOszwFFmqS/EJ/jihu4q/WzL23gOpOuHTjdwA5lPIZ2RqIjtFFWwW/GqdY4dQcvScQdamyjcuU7fN0Q4AsBYCwFgHTFzaU7PAlb2uWNQwSbsDPVQ1xmaR9sRVEvVQwy+QVHDpxu3Ymd1XT+xkpo1LZVLn3DGGg7pAbEUqHgU/slVRUiXyCo4dONsLQ0Hb063FSvkiXt10q+QXp3U++mDm+a4g5BECo4dON3AFgLAWAsA5fAdfRbXbMno0Y33WFn2XDpxu4Ac2BQF6xM1bJUB66bqSLYvMNe0twGrSepvz6feWw6cbuAKvlT+takk0nfxaFGW8W/rpwf0GY0SPitdEWMikz7a+Gzt4gM1uqCo4dOLbAvWSo/a0KK9S/lb+0UwJTe6Lz2jLO6VFq8g2ve47jBvbVGaAniZuHTjdwA8V9GgAee/uw96RDVX4Yjzym8jsJhjLoB/NW5VZcqkqOHTjdwA4cPzFvJ/5ylTvBK33DpxtYGGV9nFKr3CEp6+DZIcdY27gCwFffhzrJS+rYCA7RhBqIiHt2VHBmz7TK/birzKvakpHmh8KhPujh0jQAWAsCCe2FsBYTtie2J7OAsBYCwFgLAWAsBYCwFgLAWAsBYCwFgLAWAsBYCwFgLAWAsBYCwFgLAWAsBVgAD+/vLIAAAAAAAAADIyax0+KKWEEJPnzLBhUpr3VBlWgwgYZqqf8if8rChl0+26Gb1p5h1YuhTiiuZMM3/2lVQG2SH+n+eOtSsjb3Wff2uAD5/Vdt/eVHvs1aJepFwcJR35znhQBz+UayytIxIVvAb+K6ZJm8qWwd2DfPZEe9WAyCFoQBocZYbJY9yysSykjhqCOHrJFpBiFgjQd1njPePIgUjy+zAGQIq/QJvscdKX7jfY5wAFVDOBBX/OvCJRa7lkTRCJRhkqeiLq5TcNZu1KLwF5YPsNBS7hTOlwRM7hMCvU2A5JKVqh8fUa8MMM/lr2qu0nSsvKjH/29pea/zQobF8Q/+8UWCGpTXW919XijDAq8D7qXgZO/fLelRrJYzXJZSB8KOoKpfHKmkU4+hRh/6DRI9QmwFd3apMxAECaYP9cADeszD3JVkzedun81jNSNlHa1pE/CTcXfjpl2zZM1erHLwJ4Z9v/AmP13/OxbnlYylQiwf+zBuMqVUtEIRr3kA9JUcRYM74EhfxLbfdqLHVGflRWu5dH+AGCyK3KBBl7Z9V9Uu4uq0gAOMPaKaqttNhzIqRMHYuBwcFthAFovXynOLbJzR+BVpfuSahKEBUxUeO2vPM1ZCoQ2OW7+SrmdSA76AuffpH6dC8iO3D2jSDpk5n4VFr0mjdWihq/SLAAW4Tsopqq4W5Zd+wbfnmU6J6WCybuN2ztOlayNmTZ8MlD1KPsMPs0nXFDvti0zIHc9RaIa12prgD5FcbTqsnYoZNfE0PxrZZ+MP4wQisupLKoL022imgAcTSL4/JbN3MV1oLKDzw6QvH75BcZmxlMGFcjDiJ8thT+k0KLLB7JL8jcY0D/rwWJSY8yobKwUgquRUPfmAssFYRvsEZz2Iky7drVWMpf+me7/HlhkPlwpbPfTLueOt244+7j+lA9h4aGP/MPfH0CgiuIXtVFIqqyH/RddRg3rUJMVpUeDSYWBbSbqgpveFGjkc4PYta+7lBY5r3+PAH3Ev1gDCyGPzxcUm1d19y/zWqJpA1hQ4S01CqK+cbZhlSKwatJp3kqo154P8SZYOG9Y0ZsPrn/suaHYX3/uyLD9sVCM/awczRWAL8przeOp+YeLoJf6SQwsSCdTpktPYZRHQ9pGQHlphGfPV9/Khg21SmS7Ubk4PnH1c37r2IMsvjbt42Xk6Xn8LVlds0a/vJ6UstbUXK0Uud2P6tphJp9+bAS4n79/mfiSST/yZeRHVXvgq+2R/Z6ypMQ/rXZCKF0hEq88M8CJSbNL5/3Fg7UXVvKDxHOpWEEj9UY09xaIGfAAUs1YpkmDzj0w+AAB6evazhvw44rxLNGLpMK9t3UGdHwc2mTl+IMk4FHnhWnZwh8QHkz0eSLJeq0aiVNXr7loAKuz5xPa+LFMV5izEaSOU73X7XdT5bQt76n0g9U24fjyJUuK0OMm4+8tmRQy2mOtrxq0CFRWI4HaOAo7VIAtT5fFtIWdLPNiS6CeuOoI+79eZWi2zCeOrsEIgn4BJeG6y+4ZTchPgeXtjULkgupZYXvi6afdwsC8sOB5m3eb0BUywtdW0JZ4rT9Pabm1KmQjsgwjbVUesdsV6B8JBureJl0K73g2qn1Dv9shj3LFaMB7tf6rMJROCf/0OvTRelgwoRgmUshySbS3WATcs2wYgnSAIeH6w7nu6y26UbAA5ARMCINNvRPOQF78cvjpsOJdPq5zcc7TR89n6Cn0/DBr12UtKHUEW7KpBTCs1EfkmvBeT3WY66ybrkSk+wW1KYWz97qSuBi2RvRDiCH5U1BBhHSn0+VUhhP4S7KRxiPWr1xZ1dEkJTpbJphw1V0xl/4v2xuDWQ+OerQ9kvnTSUh9G8naa1EZ7zjO51itQHkxJyvhg0yv4IChaeoGbxCyL676Bosp9np74BnFt0CQkaVeKR56spnTV3kCtKYqIMeAObritE8E37KL/hxOYqDosb7WA4ndL30AASpYuf5nJrmcWazARVXNmMyM6wpjwNMEtf7Okjq9jfkXMyUlWUHcVAgfCIV+sMo/zfDyscfVdxjnX3+/LGCaa9C+RPXtRf9ioQCJGFxJSdxbvae5CNCV3Sob7DBOynsNDccWpk85w6Z6va7f1BcT098t71ki2kxm15znLuWNvfxIy/EQmVPXABq3BcHCegk12GMzsL7BQ7o5t33HChiocqv8AfYaZJglnc4C+Tk78/uNe0f9cizLw81UlQQnLVMODjWka7XNZ6WiMr3szreIK6RQRjjUVQwaHoV87ABLrI0coEMyvfC0Nqbwr37/iGcMpX0RVqORBZpH7vVc4u3iqv3CsMcQv10/xxFvb6MPQ40bj1aaUjn292E835Ku9NqzoMfF5fBjtqTzw2fDvIP7nL8BosJPO157HynbaK7LJHehzcL4OSdZ8C//gjZqYm+TJ3Fkb88jXMfCrf7eOcLSFxMXsWBpsBuCD/I+ySgA+wVyp4QRMnZY0eBNsTQCt4Bxpe+nx2ob3vuOi4APvfpb3hrF3jzwqji5+1lqKpSXQ4AVXLQtsC93mpR2tsJiCbdB/LdeAmx1zqfETShTt3K81Y4uWk9/bhQo/bvtvhl/Ul2ruqsYzoVQ/pFypi/Xd6aKKW79sf96cZE495vEdRR67wyzdffh1RGiosxvFFQmJXVnO1bm/AoIu6C4jy706466E+0wIWDr+bGoAWCgliDInVYWvzb7mgx89RTZBLuIPgJJ4jA2qhXnZq4UmzCOiwtA6ItIXJiGxTxP1DgM4X8mnoN5k2roWqiAoFhePCXiMDHdE6NnEcz74d6AmXF0vzpevAFgCuwCTiGZStpuo084PtFjRJK5VKadrRPksVq8NRcyIDmH32kHPR/Im8OUxLzLj0O//3jFzLHQ5FbqqMBDxGRcmJHlB/sdVEjftCObwB+hGwBQW2/sWB93QlBU9B4Ng4YVPc/fa868rkbgIaU5Kwu4/U5lwXkAAAARmx+qdWdxJxkBH6RCwj2LAYJIGiVoSkqoRYjgHo6ABVhyWhCMLxd9CYEIFS2v7IFCzhYV9zpmnGrC3y5fj+OcjdpCy0AGaqmKfu5e3ZfJzedDQ8TrZw3xYco7J+r8/PRUhfYSUiTV2pTrO8vgKLUXled+cnmv/QFYzghBUEJLkTmnsc6APruv2+jDZBvSo8054JbR/YVQs/+cpr/Ryh7M+OsX0l9jE5QJ42v9lufzTaVbJ23y0iCE+GEycxhvKLHw8AJ5GhYAFw67vCcsxrEV7M+Alopyy5Xy9Ib3xO6U0hprB+Mt2iZBdPxxSRytG/f0K1AtDRx29W4bH4a2juVev2ArFX3s8chr32lj1FzYc/T96TXK8xdKVuvj4PBIVqoiLmZEqD+V6FTu1UnS9aRa+Fl4nqCUfncUUpWcGueypXP9wA801SvQ6fVX1Q/Q+cMF2viiQnNLjj/UteR9n13Ffjb4vh2hC4imD/nFug/H2Zqq3ULOmIMMquT1Q9ULYacjkTL+gkNLUlrJ1AAKt6Cd8fhlKmYIi6IUreTH18YlSMTnxaSqec3bRodUrpT6YdCuk1hoWiQFMcdnjWvyKOwV3FD1aWE/2FDaOihsH8V20rXZRYimGmmUru3ETjWeFC29VbYrEmELA5stIq15FCMYzBJ103vy5IZjm0d6sJyftRmevbBQiRnOqppE/wAJtmtpbda2vITUPCOGydkZQ6g3NqLBqXErty1ZzoWK+E3kgTbEsfihZvM4qU4EwG7E25knuSjQsIF31iuk1F6kdMrRFooazLsiljSff2edKP1alc3xGfMQ/5YDunx+ARfJRTZ3YSW7Hlm8nBAeXOa0OwrhMmM0F+cUTDo58/NoJcKyJyChLLYMB9e6EfBzSVme5Ow2NA2x4kNFYYqrxAFtndAV7Dg17ONaiArRifHVJ5X7hfNPMdxc5Y2RfZR7WQFY/6GH8fEcaXh59Gisenm6HBD7CEd8HiyYFeNg8U/N6KgS1n6iKeMN7a0pddf4EB1AsJzg4hBQqT6Ly830zs9del6CVgWACSaHbgSZomvb5cVWv+PLv0GfAOjeLIkUB0RRj0dWstD+Q4AONRnuyZpudmvo44gAyqdAJ7wpiTLt8bDqjeTr2LoDccpBlZp1nqd3BW8VQi+AU726QPBf0oj2cqyxHuAIAdB9O+izAUMFq1hzU2a/TQnICNQJ7mkbyo/5lis7je564COcwLAgEdevS6jcj1fXJJxUho3M1yGq1P83ZSysoY/iLC9Z7yldCGDTbETtA7mFtVfntbw8pjkWB6TQas6Pof2mgWDde4c3oVitYHggv5DUwA+S48b2wj+5zVe1ZepwSheM+9lBgxuaRv+fyf5z8JRKpDRvlYSY4idQYXuSR51+NLDIuufp5GoWRIBLOTrLqhLqE6a0Z0hHVLOPlg+hIPaI1Nh7laNd1B96VAARBSDbPBqUUKydko2OewYtgyFPoreuWcrXprVl/Cks3wE6Un74+8b8cDZ7sUQEwVa7vmBHsNSIl8+/O/3mweN/VKaETaCKUzM7/JssrmaRRKgwPZ649Nek/mEF90hnSGvEMoVcO8DkpBntxzLCf6fKdBnnQMV1uY+Eab6ygcJkbHnZ41r/tF4+ERXWdvnPOhts8WxA9ZgBCZo/iUJmoCGFMbyCphDckn7OFA4PvdxiX5dfj+xc08mThAhyHTzyXaSyTdqvgR/n4XyJNbZhk6IJ9DUJfddvz2rjYBGq8Wgl/t91rcwlKSX8Bb1Q+Oe8apqkMSMqn/IhbQlmIHd8IE0YM8MTRyJdURxEdN2OdZCb885Q7Fw/q7Lwmx/FssFhF/SBNXg4IFH1AWzHXYsR/+jQM13NLd0Ky9LHaW0CPe/cHyvaA2jAXcJlxc4kMdP8qeqrrG5HjoUBjwjbzTSKmBMr5Ui++AHaPCnHqJpc4NzDKBTNsyefloE86e7tBpmXSU51YQFCn4TbHQR4fXtKkAeF2FNBh+817GiYXVBRXFhx6mVQAHzyzCztSxYWQnT8VRp0YsiN1wy33Vhu2qUC6FZ4issy4MSWFeN6miXn2fZDqoZoCsIWGHKOzg5W9ydKTwSiWSuRl2GYpVNaxvpJkd/8C2LSaGdh1D7qSSHRlVC1yxXWGTfLva3M4pSIL1dID1+0/cAMO5qCg0zo6YgP9hb7KAO2Fpk6j80g5it5wAAiiS2/yAdol7E5ZIi4dYnlv8OT/uYkRVnJ56KSXq1JN6E+mhooj6j/un81rU+/zVlFQ6mkrZ1+x6bufgC0C3T8MVgPrlkM/uXBzliEKmPCqNiE1QknGkUL3qH/50dbCpiYCj+ocK9lRWWD6ZHdWfr2Fgx9mSBDYqJp7oNQAZys1x/nTPcBHgK2CG69H5E+PMWYOBZ/NySb/cx/hP9S7UMbHH5rBPov2YiGPHQ16sxrtlHpRhCll6v53GoQ0F88TQsN8NtEMS8o7GLkNKVpsdTsujGnfYWo6q8BZY+SlRU5U/iev/18zCXJnmsgh9LlEdfSGaxo4KHPa3Mqn9TPubAmgeIhGSaMoS4GsO2E6p7cczv28AvI8W69EklP4l5vGmjzdF1j8lbUom2NLzFTPaLglM+0rDG6iyEAFiGPcXn4Sssy+IaMk+3pbsSLJR0MnvrCwFMdt8KJ1M/J9WSnGnYqMqWSEzM/1aCY1o0IBfsPcJKOk1W+c02eXcAOHP7s9fhfdSHdeHZ+M2ZO1mE1qI1/UE3XqGHz2b/wTuACPkvxZaitld+WTCXsws6jz4lDPJaF9zJmoyYK6ZIAJhtc8P3dZa8LywJBUQwiAGaAKZsAbyzmDYQ4pWVWXghnUH0tPbSF9yrcK6HXurv+fyi+y4FXTcMo0+DrkPK6HZOsVaZ+zFOf89vr//cEOIx3o/NKMfb/+Vufgxq0ywuROCv/qxcSss6dx5CtUzpQt5NoWNXlXIz63fAAbFDV62UojUScbOW+/NHhULbL0myv8H8tLHO0VgF3x9z1kTh1dvN0/Pr0T8Xmfi+niROBAH4/w30NNTFPCJ4PA9hc+KoIKEur0FeRr/oKUtIVcAPCi2Bo8e/oTm+34zQ/WWgf0vYdYjqQNUx8HCfZQDaaHfLc9bvVFEzCQcMv1mjOw4kjM7SCzgMz0yCnUY9ZbHGyrLMJ1zZBM38RhWrSBQgPNMTBoD2AYr4W6/Yy9PYh8vOowiQ4QHBVfroPEr5jdZ10YfWF03nafqD9ZHf72cTcVRSIywAPwWAoQx4vloV0K6dutYN4qMhHxO9Ihr6KT/10UPvvwJsnBQtiDXEa3HBdrIYfzL1gqWgZC6xaMOOs8eK0vJohBRTOYQ8ePcIaFhOLI18Ia7Iyf5oIHqtAO6Dr85mnYJOrSxgn0jPTW9r2A/zseToFq6llNdyjJ35AzOCnoo01Q49inOerRK/jC35DHtt+x+J87pIDmAMbtwWzcl4atxZJSBVR2H2r//bwCLWoraW1Q/UZA22Da/yXjgwrgSJ9oxlq4trlVMs8sGfRt+LJDQngJnCT1cWdc/+O+R6dd/57YMrXs+LVqh8BDbP4Qx2bwGooD1gYGjD/vaO0JmiLy2RlfUK2FeFJHzB2H2/Y0eBUpucIEEthVoPp85Y1FChcjpROZNAbZu6cfJ5pfxdQV3/NKjhADiZ/exgC0MmHeLuGpNZ8b5TV/TMEAt3Aq0h9iCMWVbOKgfh5OaE1Qi3t5qsVUiW6x6NXnW984ht7bLJstrZEa4yAKDaAgMr2ZwE9VT4Ag1eAQQl3gxBGGOb658m/3vrzuCQKzMsk3PmrHHbedydzZnxKLxi33yTN5/SkSevmzoGy27TpdRo3UNzCtnc1bLElGqyrMMm1Rns31TNp1XdYSo0+Pf7Ckv0FzEj+d0cwbDzG1p8I22H5KimcR5BE/n+qUoBO/07/gawp4W3WaTf7+BI84JC9AFY/5o8w4vVCv5CD3Eg4ToB2KbSsWqPWpoOaPvtM+yhO84lXe9GdGI12nnGOiKEzP0ysQykJHDsoZViqD6EzbdIqgAjGQom6m8cXcodD3tp3VcHpI6Ix07J4nR127BBxcoGf8Phe/wgRnfBnlk7JDZ2JkEL0LLKlQA6+0Vzq4pNwlwNlCAkdcFH61qJvsE3SPEfXCHD/uCGjS7iQHw8GhtEQvdO3M0bUArB58aBTT+rviAxWyA1gslYlPKVAoUPTEkJADdngva6yQUmTuMm4ncc8ARJioNe52uxxwB7mFE7O1D6G2OgzxSmEJxgAMTW3Vv5u/oX9/VSErIFwwzkBhhmsftQA35hUcTdIZJo0EUQXNxRq4y4mkIjTtRtdW/TF7iW9hgLe8DyML7/ZqDmlA1tm47D9b9buibB2gxIBwCLZymnUEXFeUIh0kc79YEe3EFi83O7LJc/8FJdG+GjYKR9dzZK0CW4eqBDhuoS5XO2s5bp5WB0Q8uGlPwTWPezra8G6yTCPjUM8YBgHhN6vd08T1243cuofPB8OG82wzB5e5lD3Ao7grGZdq64atjoAKH9I5cLNWK6npp+xcLiI3oYZy4fgdWNEzOPjg7IXcxnZc2PfNNYMwuDpMifsmgd19GF3Co7KihGTmi4qsyKL9Btc1IX8GvWVhMkv2AtYDiA6gvdTvxRWq4wVpKiss8J+0Q5F1Zn6Ty/ChWAdf+Fbh0orr0eX0ensGPr0qye3wk8fA9F39KJgbmk6JHCeMeF1NghV7m3kYEa95GJpoaKQHRl0DCStVyNGe3+OiRzTwW4FQJiOUrBQyQ8Md98uDDzVUvo0VicGdV9AK5Wfa8g60yN0M/zxr5hFfK646/JmMt+agInRjPorvw8hbiLPhYb9b3HYIXBuDR3U/fhcv1NqS0hJWEY2cXI38cw0SYsS+zIucGOYCPgAAM0xabns6lDVlwfEb4omu7UxXRJ8etcwrVEd1SXpuBxoWGA+O1xCB4PKtycW8mvHOk4+CeVcrBRSpbv/Vuz+wAoVrInXssfNv+tpjR/949kn4AWZC75fvEnSaBkxaMjLggrliAVoLn4h/++QXOVFdCVDajR9splsaleqNDZaDh7dMQEeRnDkjulc90LZQ09HtyE+Y5HZjzkUwTu1T2dXZdg5rp0Ykank+D1SXeJJ086RNT3nndKb8Z4mhljQOC6ecGGxIp9oFZCObBBfkVx5VddcDVxESjUUgZZAPenMLvswQrmybIeA3aFNnQFvslrYCA5m8ROj4wRkQ+FDjIPzWKPpSQABLaUjKjBAAAAAAAAAAAAAAAAAA=='

const BISQ = 'Bisq';
const HODLHODL = 'HodlHodl';
const ROBOSATS = 'Robosats';

interface IExchange {
  name: string;
}

export default function Exchange({ name }: IExchange) {

  const extractImg = useCallback((name: string) => {
    switch(name) {
      case BISQ:
        return BISQ_BASE64;
      case HODLHODL:
        return HODLHODL_BASE64;
      default:
        return ROBOSATS_BASE64
    }
  }, [])

  return (
    <img className="exchange-icon" src={`${extractImg(name) }`}/>
  )
}