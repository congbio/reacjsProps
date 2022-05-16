import React,{Component} from "react";
 class Cocula extends Component {
    render() {
        return (
            <div className="container">
                <h3 className="text-center"> Kết quả học tập </h3>
                <form onSubmit={this.handleSubmit} className="was-validated">
                    <div className="form-group">
                        <label htmlFor="hk1">Điểm HK1: </label>
                        <input type="number" className="form-control" id="hk1" name="hk1" max={10} min={0} defaultValue={0} required onChange={this.handleChange}>
                        </input>
                        <div className="invalid-feedback">Điểm không hợp lệ </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="hk2">Điểm HK2: </label>
                        <input type="number" className="form-control" id="hk2" name="hk2" max={10} min={0} defaultValue={0} required onChange={this.handleChange}>
                        </input>
                        <div className="invalid-feedback">Điểm không hợp lệ </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="hk2">Điểm trung bình: </label>
                        <input
                            type="number" className="form-control"
                            readOnly value={this.state.avg}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="hk2">Kết quả: </label>
                        <input type="text" className="form-control" defaultValue={0} readOnly value={this.state.result}>
                        </input>

                    </div>
                    <div className="form-group">
                        <label htmlFor="hk2">Xếp loại: </label>
                        <input type="text" className="form-control"
                            defaultValue={0} readOnly value={this.state.xl}>
                        </input>
                        <button type="submit" value="Submit" className="btn btn-primary">
                            Xem tất cả
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}
