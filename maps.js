// Map for the game
const dmap ='d                                                              d.'+
            'd                                                              d.'+
            'd                                                              d.'+
            'd                         c              ccc    p            c d.'+
            'd                         p    c         ccc       p         c d.'+
            'd                              p     c   ccc          p    p c d.'+
            'd              c                     p   ccc               p  cd.'+
            'd              p                                          p   cd.'+
            'd                              c s               c s     pp   cd.'+
            'd             c c        c     ppp          c    ppp   cppp   pd.'+
            'd             ppp        p                             pppp    d.'+
            'd      2             s             s   c    s     s   pppppsss d.'+
            'lbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbr.';

const devil = 'd                                                                                          .'+
              'd                                                                                          .'+
              'd                                                                                          .'+
              'd                                                                                          .'+
              'd                                                                                          .'+
              'd                                                                                          .'+
              'd    2                                                                                     .'+
              'd           g    g      gggggggg                                                           .'+
              'd           g    g          g                                                              .'+
              'd           gggggg          g                                                              .'+
              'd        cccg    g  ccc     g                                                              .'+
              'd  pppppppppg    gppppppgggggggg                                                           .'+
              'd             p   p   p   p   p   p   p   p   p   p   p   p   p   p   p   p   p   p   p   p.'+
              'd                                                                                          .'+
              'd            sccsccsccsccsccsccsccsccsccsccsccsccsccsccsccsccsccsccsccsccsccsccsccsccsccscc.'+
              'lbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbr.';
const df =     '                                ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd.'+
               '                                g                                                                                                           d.'+
               '                                g                                                                                                           d.'+
               '                                d                                                                                                           d.'+
               '                                d                                                                               c                   ccccccccd.'+
               '                                d   2         ccccccccc           sccs                  c      sccc             p    cc             ccccccccd.'+
               '                                dpppppppp     ppppppppp    ppppppppppppppppp    pppp    p    pppppppppp   pppp    ppppppp    ppp    ppppppppd.'+
               '                                d                                                                                                           d.'+
               '                                d                                                                                                           d.'+
               '                                d                                                                                                           d.'+
               '                                d                                                                                                           d.'+
               '                                d                                                                                                           d.'+
               '                                d                                                                                                           d.'+
               '                                d                                                                                                           d.'+
               '                                d                                                                                                           d.'+
               '                                d                                                                                                           d.'+
               '                                d                                                                                                           d.'+
               '                                d                                                                                                           d.'+
               '                                dsssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssd.'+
               '                                lbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbr.'+
               '                                d                                                                                                           d.'+
               '                                d                                                                                                           d.'+
               '                                d                                                                                                           d.'+
               '                                d                                                                                                           d.'+
               '                                d                                                                                                           d.'+
               '                                d                                                                                                           d.'+
               '                                d                                                                                                           d.'+
               '                                d                                                                                                           d.'+
               '                                g                                                                                                           d.'+
               '                                g                                                                                                           d.'+
               '                                dcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccd.'+
               '                                dcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccd.'+
               '                                dcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccd.'+
               '                                lbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbr.';
const goingup = 'd                                                                                                                                                                                                                   d.'+
                'd                                                                                                                                                                                                                   d.'+
            'd                                                                                                                                                                                                                   d.'+
            'd                                                                                                                                                                                                                   d.'+
            'd                                                                                                                                                                                                                   d.'+
            'd                                                                                                                                                                                                                   d.'+
            'd                                                                                                                                                                                                                   d.'+
            'd                                                                                                                                                                                                                   d.'+
            'd                                                                                                                                                                                                                   d.'+
            'd                                                           s  cc  s                                              s        s c s       d      d     d     d     d                                                   d.'+
            'd                                                         pppppppppppp                                           ddd       ppppppp                                                                                  d.'+
            'd                                                     c                 d                                     p                                                                                                     d.'+
            'd                                                     p                   d                                c                                                     d                                                  d.'+
            'd                                                                                                          p                                                                                                        d.'+
            'd                                                 p                          d                                                                                                                                      d.'+
            'd                                                                                                       p                                                           d                                               d.'+
            'd                                             p                                 d                    c                                                                                                              d.'+
            'd                                                                                                    p                                                                 d                                            d.'+
            'd                                         p                                        d                                                                                                                                d.'+
            'd                                   cc                                                cccccccc    p                                                                      d                                          d.'+
            'd                                   pp                                               dddddddddd                                                                                                                     d.'+
            'd                             c                                                                                                                                           d                                         d.'+
            'd                             d                                                                                                                                                                                     d.'+
            'd                        pp                                                                                                                                                                                         d.'+
            'd                                                                                                                                                                           d                                       d.'+
            'd                   ccc                                                                                                                                                                                             d.'+
            'd                 ppppp                                                                                                                                                        d        c     c   ccccc     ccccccc d.'+
            'd           c                                                                                                                                                                           c     c   c     c   c      cd.'+
            'd          ddd                                                                                                                                                                          c     c   c    c    c      cd.'+
            'd                                                                                                                                                                                d      c     c   cc        c     c d.'+
            'd   2                                                                                                                                                                            d      ccccccc   c   c     ccccc   d.'+
            'lbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbr.';
const level='d                                                                                                                             ccc                                                                                                                                                                                                                      c c c c c c d.'+
            'd                                                                                                                   p                                       ccc                                                                                                                                                                                       c c c c c c cd.'+
            'd                                                                                 c               cc          sc        ppp                        ppp                                                                                                                                                                                                dddddddddddddd.'+
            'd                                                                 cc              p    c  p       dd   p     ppp               cccc       cc                                                                                                                                                                                                      s                d.'+
            'd                                                                        c  c    p     p    pp            ss                   pppp     cc      p  ss   p                                                                                                                                    cc                                                  dd                d.'+
            'd                                                                      ppppppp     p            p        dddd                          dddddd      dd            p                                                                                                                         pp  p                                                                   d.'+
            'd                                                              ss  s                                                                                                               c          c          c                                                                                             cc  c      cccc       c              d                      d.'+
            'd                                                             ddddddd                 p      p                                                                                     d  sscccss d  sscccss d                                                                              c                                  s                                       d.'+
            'd                                                   c     p                                                                                                        p    cccc     ppppppppppppppppppppppppppp                                                                             s       p p  p  p   p   p    p    pp   p      d                           d.'+
            'd                                                    p                                    p                                                                               d   p                             d                                                                           pp                                                                         d.'+
            'd                                                                                                                                                                       ss s                                                                                                                                                                                       d.'+
            'd                                      cs   p     p                                         p                                                                        ppppppp                                   d                                                                     p                                             p                               d.'+
            'd                                    dddd                                           cccccccccccc                                                                                                                                              c                         c c                                                                                        d.'+
            'd              cs                                                                   cccccccccccc                                                                                                                           ccc       cccc                 c              c       p                                                     p                           d.'+
            'd          c   pp               cc                                                  pppppppppppp                                                                                                                                                       s     s       s                                                                                             d.'+
            'd         pp                    pp                                                                                                                                                                               ddddddddd     dddd       dddd    d   ddd   ddd     ddd     dddd                                                            p  cccccsccccsccccsccccd.'+
            'd    2               ppp                                                                                                                                                                                                                                                                                                                        dddddddddddddddddddd.'+
            'd    p            sssssssss                        ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssd.'+
            'lbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbr.'