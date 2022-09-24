import {Link} from "react-router-dom";
import {SelectButton} from "../pages/BookSearch";
import {Default, Mobile} from "./common/Mobile";

const styles = {
    div: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        marginBottom: "20px",
        marginTop: "20px",
    },

    button: {
        marginTop: "auto",
        marginLeft: "auto",
        marginRight: "auto",
        marginBottom: "auto",
        backgroundColor: "gray"
    },

    title: {
        marginTop: "auto",
        marginLeft: "1rem",
        marginRight: "1rem",
        marginBottom: "auto",
        width: "24em"
    },

    mobileTitle: {
        marginTop: "auto",
        marginLeft: "1rem",
        marginRight: "1rem",
        marginBottom: "auto",
        width: "12em"
    },

    selectButton: {
        margin: "auto"
    }
}

function SearchBookItem({imageUrl, title}) {
    return (
        <>
            <Default>
                <div style={styles.div}>
                    <img src={imageUrl} alt={"hi"} width="80rem" height="100rem"/>
                    <p style={styles.title}>
                        <div
                            dangerouslySetInnerHTML={{__html: title}}
                        />
                    </p>
                    <Link
                        style={styles.selectButton}
                        to={"/books/register"}
                        state={{imageUrl: imageUrl, title: title}}
                    >
                        <SelectButton>선택하기</SelectButton>
                    </Link>
                </div>
            </Default>

            <Mobile>
                <div style={styles.div}>
                    <img src={imageUrl} alt={"hi"} width="80rem" height="100rem"/>
                    <p style={styles.mobileTitle}>
                        <div
                            dangerouslySetInnerHTML={{__html: title}}
                        />
                    </p>
                    <Link
                        style={styles.selectButton}
                        to={"/books/register"}
                        state={{imageUrl: imageUrl, title: title}}
                    >
                        <SelectButton>선택하기</SelectButton>
                    </Link>
                </div>
            </Mobile>

        </>
    )
}

export default SearchBookItem;
