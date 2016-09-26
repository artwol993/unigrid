/*
Copyright (c) 2016, Grzegorz Junka
All rights reserved.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are met:

* Redistributions of source code must retain the above copyright notice, this
  list of conditions and the following disclaimer.

* Redistributions in binary form must reproduce the above copyright notice,
  this list of conditions and the following disclaimer in the documentation
  and/or other materials provided with the distribution.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import React from 'react';
import {cleanCellProps} from 'src/helpers';

export class UnigridEmptyCell extends React.Component {
  render() {
    const cleaned = cleanCellProps(this.props);
    const Tx = this.props.rowAs === "header" ? 'th' : 'td';
    return (<Tx {...cleaned} />);
  }
}

export class UnigridTextCell extends React.Component {
  render() {
    const p = this.props;
    const cleaned = cleanCellProps(p);
    const Tx = p.rowAs === "header" ? 'th' : 'td';
    return (<Tx {...cleaned} >{p.cell}</Tx>);
  }
}

export class UnigridNumberCell extends React.Component {
  render() {
    const p = this.props;
    const cleaned = cleanCellProps(p);
    const Tx = p.rowAs === "header" ? 'th' : 'td';
    return (<Tx {...cleaned} >{p.cell.toString()}</Tx>);
  }
}
