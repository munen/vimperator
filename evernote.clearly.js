/* NEW BSD LICENSE {{{
Copyright (c) 2009-2012, anekos.
All rights reserved.

Redistribution and use in source and binary forms, with or without modification,
are permitted provided that the following conditions are met:

    1. Redistributions of source code must retain the above copyright notice,
       this list of conditions and the following disclaimer.
    2. Redistributions in binary form must reproduce the above copyright notice,
       this list of conditions and the following disclaimer in the documentation
       and/or other materials provided with the distribution.
    3. The names of the authors may not be used to endorse or promote products
       derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT,
INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING,
BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR
OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF
THE POSSIBILITY OF SUCH DAMAGE.


###################################################################################
# http://sourceforge.jp/projects/opensource/wiki/licenses%2Fnew_BSD_license       #
# に参考になる日本語訳がありますが、有効なのは上記英文となります。                #
###################################################################################

}}} */

// INFO {{{
let INFO =
<>
  <plugin name="Clearly" version="0.0.1"
          href="https://github.com/cd01/vimperator-plugin.evernote.clearly"
          summary="Evernote Clearly のアドオンの中身をコマンドに割り当てただけ"
          lang="ja"
          xmlns="http://vimperator.org/namespaces/liberator">
    <author>CD01</author>
    <license>New BSD License</license>
    <project name="Vimperator" minVersion="3.0"/>
    <p>
      Evernote Clearly
    </p>

    <item>
      <tags>:clearly</tags>
      <spec>:clearly</spec>
      <description>
        <p>
          すっきりさせる
        </p>
      </description>
    </item>

    <item>
      <tags>:clearly_save</tags>
      <spec>:clearly save</spec>
      <description>
        <p>
          すっきりさせたのを保存
        </p>
      </description>
    </item>
  </plugin>
</>;
// }}}


(function () {
  commands.addUserCommand(['clearly'], 'Evernote Clearly',
    function (args) {
      __readable_by_evernote.readable_by_evernote__menu__call(buffer.URL);
    }, {
      subCommands: [
        new Command(
          ['save'],
          'save to Evernote',
          function (args) {
            __readable_by_evernote.__readable_by_evernote__launch(true);
          }
        )
      ]
    }
  );
})();

// vim:sw=2 ts=2 et si fdm=marker:
